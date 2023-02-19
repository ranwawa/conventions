// 1. 获取目录结构
// 2. 创建标题
// 3. 获取文件
// 4. 创建链接

import fs from "fs";
import path from "path";

const { statSync } = fs;

const PREFIX = path.join(process.cwd(), "./docs/rules/");
const LANGUAGE_MAP = {
  script: "逻辑代码",
  style: "样式代码",
  format: "代码格式化",
};

const CATEGORY_MAP = {
  imports: "模块化",
  grammar: "语法",
  methodology: "最佳实践",
  naming: "命名风格",
  style: "格式化",
};

const getSubDirectories = (dirPath) => {
  const files = fs.readdirSync(dirPath);

  const directories = files.filter((file) =>
    statSync(path.join(dirPath, file)).isDirectory()
  );

  return directories;
};

const getFiles = (dirPath) => {
  const files = fs.readdirSync(dirPath);

  return files.filter((file) => statSync(path.join(dirPath, file)).isFile());
};

const updateFile = (language) => {
  const parentDir = path.join(PREFIX, language);
  const subDirectories = getSubDirectories(parentDir);

  const indexMarkdownFilePath = path.join(parentDir, "index.md");

  fs.rmSync(indexMarkdownFilePath);
  fs.appendFileSync(
    indexMarkdownFilePath,
    `# ${LANGUAGE_MAP[language]}\r\n\r\n`
  );

  subDirectories.forEach((category) => {
    const alias = CATEGORY_MAP[category] ? `(${CATEGORY_MAP[category]})` : "";
    fs.appendFileSync(indexMarkdownFilePath, `## ${category}${alias}\r\n\r\n`);
    const mdFiles = getFiles(path.join(parentDir, category));

    mdFiles.forEach((file) => {
      const fileWithoutExtension = file.slice(0, -3);

      const filePath = path.join(parentDir, category, file);
      let content = fs.readFileSync(filePath, {
        encoding: "utf-8",
      });

      content = content
        .replace(/^# *(.*)/, `# ${fileWithoutExtension}\r\n\r\n$1`)
        .replace("## Why?", "### 为什么?")
        .replace("> ", "")
        .replace("## bad", "### 错误示例")
        .replace("## good", "### 正确示例")
        .replace("## 参考:", "### 参考");

      const result = /\/([a-zA-Z-]+)(\.md)?\)/.exec(content);
      if (result) {
        const [, name] = result;
        content = content.replace(/^# *(.*)/, `# ${name}`);
        fs.writeFileSync(filePath, content);

        fs.renameSync(filePath, path.join(parentDir, category, `${name}.md`));
      }

      const result2 = /#.*\s*([^\r\n]+)/.exec(content);
      const [, name] = result2;
      fs.appendFileSync(
        indexMarkdownFilePath,
        `- [${fileWithoutExtension}](./${category}/${file})\r\n  - ${name}\r\n`
      );
    });
  });
};

["script", "style", "format"].forEach(updateFile);
