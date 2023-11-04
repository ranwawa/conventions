/*
 * @Description: 生成文档模板文件
 * @Date: 2023-09-23 16:24:40
 * @Author: ranqirong 274544338@qq.com
 */
import fs from 'fs';
import path from 'path';

import meow from 'meow';

import { readReferenceDocLink } from './utils.js';

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
  pluginName: {
    type: 'string',
    shortFlag: 'p'
  }
};

const CreateDocTemplate = () => {
  const cli = meow({ importMeta: import.meta, flags });
  const {
    flags: { filePath, pluginName = '' }
  } = cli;

  const fileName = path.basename(filePath);
  const pluginPrefix = pluginName === 'eslint-core' ? '' : `${pluginName}/`;
  const ruleName = fileName.replace(/\.md$/, '');
  const completeRuleName = `${pluginPrefix}${ruleName}`;
  const link = readReferenceDocLink(pluginName, completeRuleName);

  const tpl = `# ${completeRuleName}

### 为什么?

### 建议

### 错误示例

### 正确示例

### 参考

- [${completeRuleName}](${link})
`;

  fs.writeFileSync(filePath, tpl);
};

CreateDocTemplate();
