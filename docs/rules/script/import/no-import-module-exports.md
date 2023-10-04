# no-import-module-exports

禁止混用 import 和 module.exports

### 为什么?

混用容易产生混淆,特别是那些对各种模块语法不了解的同学来说,看着头疼;

### 建议

只使用ESM的import/export语法

### 错误示例

```js
import lodash from 'lodash';

module.exports = {};
```

### 正确示例

```js
import lodash from 'lodash';

export default {};
```

### 参考

- [import/no-import-module-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md)
