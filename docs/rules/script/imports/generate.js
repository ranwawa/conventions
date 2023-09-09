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
  const mdFiles = files.filter((file) => file.endsWith('.md'));
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

const main = () => {
  const dirPath = getCurFileDirPath();
  const files = getAllMDFiles(dirPath);

  const titleList = files
    .map((file) => {
      const title = getMDFileTitle(path.resolve(dirPath, file));
      return `[${title}](./${file})`;
    })
    .join('\n\n');

  const indexContent = `# 模块导入\n\n${titleList}`;

  writeFile(path.resolve(dirPath, 'index.md'), indexContent);
};

main();
