# export/no-commonjs

禁止使用 CMD,AMD 模块语法

### 为什么

EMS 是官方标准大势所趋,即使在 node 端 ESM 也可以兼容 CMD,反之则不行

### 建议

请统一使用 EMS 模块语法即可

### 错误示例

```js
require('lodash');
```

#### 正确示例

```js
import 'lodash';
```

### 参考

- [import/no-commonjs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md)
