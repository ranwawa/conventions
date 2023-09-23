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
import fs from 'fs';
import path from 'path';
import url from 'url';

import markdownIt from 'markdown-it';

const getCurFileDirPath = (fileUrl = import.meta.url) => {
  const filePath = url.fileURLToPath(fileUrl);
  const dirPath = path.resolve(filePath, '..');
  return dirPath;
};

const getAllMDFiles = (directory) => {
  const files = fs.readdirSync(directory);
  const mdFiles = files.filter(
    (file) => file.endsWith('.md') && file !== 'index.md'
  );
  return mdFiles;
};

const getMDFileTitle = (filePath) => {
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

const getEnabledRules = async (rulePath) => {
  try {
    const {
      default: { rules }
    } = await import(rulePath);

    const newRules = {};
    const enabledSign = { error: true, warn: true, 1: true, 2: true };

    Object.entries(rules).forEach(([key, value]) => {
      let isEnabled = false;
      const type = typeof value;

      switch (type) {
        case 'string':
        case 'number':
          isEnabled = enabledSign[value];
          break;
        default:
          isEnabled = enabledSign[value[0]];
          break;
      }

      if (isEnabled) {
        newRules[key] = true;
      }
    });

    return newRules;
  } catch (error) {
    console.log('不存在的路径', rulePath);
  }
  return {};
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
  const files = getAllMDFiles(docDirPath);

  const rules = await getEnabledRules(ruleFilePath);

  const { unTranslateRules, unKnownFiles } = getUnTranslateRules(
    files.map((file) => `${prefix}${file.replace(/\.md$/, '')}`),
    rules
  );

  unKnownFiles.length && console.log('未知的翻译文件: ', unKnownFiles);
  unTranslateRules.forEach((rule) =>
    console.log(
      `未翻译的规则: node ./scripts/createDocTemplate.js -f ${path.resolve(
        docDirPath,
        `${rule}.md -p ${prefix}`
      )}`
    )
  );

  const titleList = files
    .map((file) => {
      const title = getMDFileTitle(path.resolve(docDirPath, file));
      return `[${title}](./${file})`;
    })
    .join('\n\n');

  // unKnownFiles.forEach((file) => {
  //   fs.rmSync(path.resolve(docDirPath, `${file}.md`));
  // });

  const indexContent = `# 模块导入\n\n${titleList}`;

  writeFile(path.resolve(docDirPath, 'index.md'), indexContent);
};

const paths = [
  [
    // 文档目录
    'docs/rules/script/imports',
    // 规则配置目录
    'packages/eslint-plugin/rules/imports/index.js',
    // 插件前缀
    'import/'
  ],
  [
    'docs/rules/script/javascript',
    'packages/eslint-plugin/rules/javascript/index.js',
    ''
  ]
];

paths.forEach(([docDirPath, ruleFilePath, prefix = '']) => {
  main(
    path.resolve('./', docDirPath),
    path.resolve('./', ruleFilePath),
    prefix
  );
});

// const imports = path.resolve('./', 'docs/rules/script/imports');

// main(imports);
