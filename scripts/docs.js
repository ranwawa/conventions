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
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import url from 'url';
import open from 'open';

import markdownIt from 'markdown-it';

import {
  readAllMDFiles,
  readEnabledRules,
  readReferenceDocLink
} from './utils.js';

const getCurFileDirPath = (fileUrl = import.meta.url) => {
  const filePath = url.fileURLToPath(fileUrl);
  const dirPath = path.resolve(filePath, '..');
  return dirPath;
};

const getChineseTitle = (filePath) => {
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

const writeFile = (filePath, content) => {
  // 文件存在时直接覆盖
  // 不存在时创建一个
  fs.writeFileSync(filePath, content);
};

const getUnTranslateRules = (files, rules) => {
  const unKnownFiles = [];
  const unTranslateRules = [];

  files.forEach((file) => {
    if (!rules[file]) {
      unKnownFiles.push(file);
    }
  });

  const rulesKeyList = Object.keys(rules);

  for (const key of rulesKeyList) {
    if (!files.includes(key)) {
      unTranslateRules.push(key);
    }
  }

  return { unKnownFiles, unTranslateRules };
};

const main = async (docDirPath, ruleFilePath, prefix) => {
  // const dirPath = getCurFileDirPath();
  const files = readAllMDFiles(docDirPath);

  const rules = await readEnabledRules(ruleFilePath);

  const { unTranslateRules, unKnownFiles } = getUnTranslateRules(
    files.map((file) => `${prefix}${file.replace(/\.md$/, '')}`),
    rules
  );

  unKnownFiles.length && console.log('未知的翻译文件: ', unKnownFiles);

  const titleList = files
    .map((file) => {
      const title = getChineseTitle(path.resolve(docDirPath, file));
      return `[${title}](./${file})`;
    })
    .join('\n\n');

  const indexContent = `# ${prefix.replace('/', '') || 'javascript'}

---

该文件是代码自动生成,请勿修改

---

${titleList}
`;

  writeFile(path.resolve(docDirPath, 'index.md'), indexContent);

  const [firstUnTranslateRule] = unTranslateRules;

  if (firstUnTranslateRule) {
    const shellCommand = `npm run createDocTemplate -- -f ${path.resolve(
      docDirPath,
      `${firstUnTranslateRule.replace(prefix, '')}.md -p ${prefix}`
    )}`;

    import('clipboardy')
      .then((clipboardy) => {
        clipboardy.default.writeSync(shellCommand);
        execSync(shellCommand);

        console.log(
          `检测到未翻译的规则: ${firstUnTranslateRule}(1/${unTranslateRules.length})`
        );
        console.log(
          `已将官方文档链接复制到剪贴板: ${readReferenceDocLink(
            prefix,
            firstUnTranslateRule
          )}`
        );
        console.log('\n');

        open(readReferenceDocLink(prefix, firstUnTranslateRule, true));
      })
      .catch((err) => console.log(err));
  }

  return !!unTranslateRules.length;
};

const paths = [
  [
    // 文档目录
    'docs/rules/script/import',
    // 规则配置目录
    'packages/eslint-plugin/rules/import/originalRules.js',
    // 插件前缀
    'import/'
  ],
  [
    'docs/rules/script/javascript',
    'packages/eslint-plugin/rules/javascript/originalRules.js',
    ''
  ],
  [
    'docs/rules/script/node',
    'packages/eslint-plugin/rules/node/originalRules.js',
    'node/'
  ],
  [
    'docs/rules/script/react',
    'packages/eslint-plugin/rules/react/originalRules.js',
    'react/'
  ],
  [
    'docs/rules/script/react-hooks',
    'packages/eslint-plugin/rules/react-hooks/originalRules.js',
    'react-hooks'
  ],
  [
    'docs/rules/script/typescript',
    'packages/eslint-plugin/rules/typescript/originalRules.js',
    'typescript/'
  ],
  [
    'docs/rules/script/vue2',
    'packages/eslint-plugin/rules/vue2/index.js',
    'vue/'
  ],
  [
    'docs/rules/script/vue3',
    'packages/eslint-plugin/rules/vue3/index.js',
    'vue/'
  ]
];

(async () => {
  for (let i = 0; i < paths.length; i++) {
    const [docDirPath, ruleFilePath, prefix = ''] = paths[i];

    const hasUnTranslateRules = await main(
      path.resolve('./', docDirPath),
      path.resolve('./', ruleFilePath),
      prefix
    );

    if (hasUnTranslateRules) {
      break;
    }
  }
})();

// const imports = path.resolve('./', 'docs/rules/script/imports');

// main(imports);
