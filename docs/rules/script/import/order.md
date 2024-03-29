# order

必须按固定顺序引入模块

### 为什么?

统一的顺序有利于快速区分模块和代码 review.不同分组之间添加一个换行符也有利于后期 review.

### 建议

由远至近的原则导入模块

node内置模块
node_modules模块
别名模块
父级目录中的模块
兄弟目录中的模块
同目录中的index模块
类型

### 错误示例

```js
import outer from './outer.js';
import lodash from 'lodash';
```

### 正确示例

```js
// node内置模块
import fs from 'fs';

// node_modules模块
import lodash from 'lodash';

// 别名模块
import outer from '@/outer.js';

// 父级目录中的模块
import parent from '../parent.js';

// 兄弟目录中的模块
import sibling from './sibling/index.js';

// 同目录中的index模块
import index from './index.js';

// ts类型
import type { T } from 'lodash';

// 对象语法(仅ts支持)
import log = console.log;
```

### 参考

- [import/order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)
