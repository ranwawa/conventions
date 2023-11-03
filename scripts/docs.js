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

import chalk from 'chalk';
import inquirer from 'inquirer';
import meow from 'meow';
import open from 'open';

import { ESLINT_PLUGINS } from './constants.js';
import {
  readDocDirPath,
  readEnabledRules,
  readPluginNameAndRuleName,
  readReferenceDocLink,
  readTranslatedRules
} from './utils.js';

const flags = {
  help: {
    type: 'boolean',
    shortFlag: 'h'
  },
  version: {
    type: 'boolean',
    shortFlag: 'v'
  },
  createFile: {
    type: 'string',
    shortFlag: 'c'
  }
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

const printUnTranslateRules = (unTranslateRules, enabledRules, pluginName) => {
  const { length } = unTranslateRules;
  const translatedRuleLength = length
    ? chalk.yellow(length)
    : chalk.gray(length);
  const total = chalk.gray(`/${enabledRules.total}`);

  console.log(`${pluginName}:`, `(${translatedRuleLength}${total})`);
};

const main = async (pluginName) => {
  const translatedRules = readTranslatedRules(pluginName);
  const enabledRules = await readEnabledRules(pluginName);

  const { unTranslateRules, unKnownFiles } = readUnTranslateRules(
    translatedRules,
    enabledRules
  );

  if (unKnownFiles.length) {
    console.log('未知的翻译文件: ', unKnownFiles);
  }

  printUnTranslateRules(unTranslateRules, enabledRules, pluginName);

  return { pluginName, unTranslateRules };
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

  const shellCommand = `node ./scripts/createDocTemplate.js -f ${filePath} -p ${pluginName}`;

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

    promiseList.push(main(pluginName));
  }

  const promiseResList = await Promise.all(promiseList);

  console.log('\n');

  const cli = meow({ importMeta: import.meta, flags });
  const {
    flags: { createFile }
  } = cli;

  if (!createFile) {
    return;
  }

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
