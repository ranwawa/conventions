/*
 * @Description: 根据翻译文件生成目录文件
 * @Date: 2023-09-09 08:21:45
 * @Author: ranqirong 274544338@qq.com
 */
// 1. 读取当前目录所有md文件
// 2. 获取第一个p,作为引用文件
// 3. 将md文件名,作为引用路径
// 4. 生成indx.md
// 5. 将内容插入到index.md中
import { exec, execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import url from 'url';

import chalk from 'chalk';
import inquirer from 'inquirer';
import markdownIt from 'markdown-it';
import open from 'open';

import { ESLINT_PLUGINS, PLUGINS_CONFIG } from './constants.js';
import {
  readAllMDFiles,
  readDocDirPath,
  readEnabledRules,
  readReferenceDocLink
} from './utils.js';

const readChineseTitle = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const ast = markdownIt().parse(content);
  const englishTitleIndex = ast.findIndex(
    (token) =>
      token.tag === 'h1' && token.level === 0 && token.type === 'heading_close'
  );

  if (englishTitleIndex === -1) {
    console.log(filePath, '没有用h1标签包裹英文标题');
    return undefined;
  }

  const chineseTitleToken = ast.find(
    (token, index) =>
      index > englishTitleIndex &&
      token.tag === '' &&
      token.type === 'inline' &&
      token.content
  );

  return chineseTitleToken.content;
};

const writeFile = (filePath, content, json) => {
  // 文件存在时直接覆盖
  // 不存在时创建一个
  fs.writeFileSync(filePath, content);
  fs.writeFileSync(filePath.replace('.md', '.json'), JSON.stringify(json));
};

const readUnTranslateRules = (translatedFiles, enabledRules) => {
  const unKnownFiles = [];
  const unTranslateRules = [];

  translatedFiles.forEach((file) => {
    if (!enabledRules[file]) {
      unKnownFiles.push(file);
    }
  });

  const rulesKeyList = Object.keys(enabledRules);

  for (const key of rulesKeyList) {
    if (!translatedFiles.includes(key)) {
      unTranslateRules.push(key);
    }
  }

  return { unKnownFiles, unTranslateRules };
};

const readPluginPrefix = (pluginName) => {
  if (pluginName === 'eslintCore') {
    return '';
  }

  return `${pluginName}/`;
};

const readTranslatedRules = (pluginName, docDirPath) => {
  const pluginPrefix = readPluginPrefix(pluginName);
  const translatedFiles = readAllMDFiles(docDirPath);
  const translatedRules = translatedFiles.map(
    (file) => `${pluginPrefix}${file.replace(/\.md$/, '')}`
  );

  return translatedRules;
};

const printUnTranslateRules = (unTranslateRules, enabledRules, pluginName) => {
  const { length } = unTranslateRules;
  const translatedRuleLength = length
    ? chalk.yellow(length)
    : chalk.gray(length);
  const total = chalk.gray(`/${enabledRules.total}`);

  console.log(`${pluginName}:`, `(${translatedRuleLength}${total})`);
};

const main = async (docDirPath, ruleFilePath, pluginName) => {
  const translatedRules = readTranslatedRules(pluginName, docDirPath);
  const enabledRules = await readEnabledRules(ruleFilePath);

  const { unTranslateRules, unKnownFiles } = readUnTranslateRules(
    translatedRules,
    enabledRules
  );

  if (unKnownFiles.length) {
    console.log('未知的翻译文件: ', unKnownFiles);
  }

  printUnTranslateRules(unTranslateRules, enabledRules, pluginName);

  return { pluginName, unTranslateRules };

  //   const indexJson = {};

  //   const titleList = translatedFiles
  //     .map((file) => {
  //       const title = readChineseTitle(path.resolve(docDirPath, file));
  //       indexJson[file.replace('.md', '')] = title;

  //       return `[${title}](./${file})`;
  //     })
  //     .join('\n\n');

  //   const indexContent = `# ${pluginPrefix.replace('/', '') || 'javascript'}

  // <!--

  // 该文件是代码自动生成,请勿修改

  // -->

  // ${titleList}
  // `;

  //   writeFile(path.resolve(docDirPath, 'index.md'), indexContent, indexJson);
};

const readPluginNameAndRuleName = (completeRuleName) => {
  const res = completeRuleName.match(/^([^/]+)\/(.*)$/);

  // eslint规则没有前缀
  if (!res) {
    return {
      pluginName: 'eslintCore',
      ruleName: completeRuleName
    };
  }

  const [, pluginName, ruleName] = res;

  return { pluginName, ruleName };
};

const startingTranslate = (firstUnTranslateRule) => {
  if (!firstUnTranslateRule) {
    return;
  }

  // 1. 创建并打开翻译模板文件
  // 2. 打开翻译源文件
  // 3. 复制提示词到剪贴板

  const { pluginName, ruleName } =
    readPluginNameAndRuleName(firstUnTranslateRule);
  const docDirPath = readDocDirPath(pluginName);
  const filePath = path.resolve(docDirPath, `${ruleName}.md`);

  const shellCommand = `npm run createDocTemplate -- -f ${filePath} -p ${pluginName}`;

  execSync(shellCommand);

  exec(`code ${filePath}`, (err) => {
    if (err) {
      exec(`code-insiders ${filePath}`, (err2) => {
        if (err2) {
          console.log(`打开自动创建的翻译文件失败,请手动打开: ${filePath}`);
        }
      });
    }
  });

  open(readReferenceDocLink(pluginName, firstUnTranslateRule, true));

  import('clipboardy')
    .then((clipboardy) => {
      const gpt = fs.readFileSync(path.resolve('GPT.md'), {
        encoding: 'utf-8'
      });
      clipboardy.default.writeSync(gpt);
    })
    .catch((err) => console.log(err));
};

(async () => {
  const { length } = ESLINT_PLUGINS;
  const promiseList = [];

  console.log(chalk.yellow('未翻译的规则'));

  for (let i = 0; i < length; i++) {
    const pluginName = ESLINT_PLUGINS[i];
    const pluginConfig = PLUGINS_CONFIG[pluginName];
    const { docDirPath, ruleFilePath } = pluginConfig;

    promiseList.push(
      main(
        path.resolve('./', docDirPath),
        path.resolve('./', ruleFilePath),
        pluginName
      )
    );
  }

  const promiseResList = await Promise.all(promiseList);

  console.log('\n');

  const { selectedPluginName } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedPluginName',
      message: '请选择你要翻译的eslint插件规则',
      choices: promiseResList
        .filter(({ unTranslateRules }) => unTranslateRules.length)
        .map(({ pluginName }) => ({ name: pluginName, value: pluginName }))
    }
  ]);

  const { unTranslateRules } = promiseResList.find(
    (res) => res.pluginName === selectedPluginName
  );

  const [firstUnTranslateRule] = unTranslateRules;

  startingTranslate(firstUnTranslateRule);
})();
