/*
 * @Description: 生成文档模板文件
 * @Date: 2023-09-23 16:24:40
 * @Author: ranqirong 274544338@qq.com
 */
import fs from 'fs';
import path from 'path';

import meow from 'meow';

const OfficialUrlMap = {
  import:
    'https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/',
  javascript: 'https://eslint.org/docs/rules/'
};

const flags = {
  help: {
    type: 'boolean',
    shortFlag: 'h'
  },
  version: {
    type: 'boolean',
    shortFlag: 'v'
  },
  filePath: {
    type: 'string',
    shortFlag: 'f'
  },
  prefix: {
    type: 'string',
    shortFlag: 'p'
  }
};

const CreateDocTemplate = () => {
  const cli = meow({ importMeta: import.meta, flags });
  const {
    flags: { filePath, prefix = '' }
  } = cli;
  const fileName = path.basename(filePath);
  const ruleName = `${prefix}${fileName.replace(/\.md$/, '')}`;
  let link = `${OfficialUrlMap[prefix || 'javascript']}${ruleName}`;
  if (prefix !== '') {
    link += '.md';
  }

  const tpl = `
# ${ruleName}

### 为什么?

### 建议

### 错误示例

### 正确示例

### 参考

- [${ruleName}](${link})
`;

  fs.writeFileSync(filePath, tpl);
};

CreateDocTemplate();