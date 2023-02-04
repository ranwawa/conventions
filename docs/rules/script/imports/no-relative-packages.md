# 禁止混用 import 和 module.exports

## Why?

> 混用容易产生混淆,统一使用 ESM;

## bad

```js
import lodash from "lodash";

module.exports = {};
```

## good

```js
import lodash from "lodash";

export default {};
```

## 参考:

- [import/no-import-module-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md)
