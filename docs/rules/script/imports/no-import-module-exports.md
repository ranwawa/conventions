# no-import-module-exports

禁止混用 import 和 module.exports

### 为什么?

混用容易产生混淆,统一使用 ESM;

### 错误示例

```js
import lodash from "lodash";

module.exports = {};
```

### 正确示例

```js
import lodash from "lodash";

export default {};
```

### 参考

- [import/no-import-module-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md)
