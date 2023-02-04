# 禁止使用 CMD,AMD 模块语法

# Why?

> EMS 是官方标准大势所趋,即使在 node 端 ESM 可以兼容 CMD,反之则不行,所以统一使用 EMS 模块语法即可

# bad

```js
const lodash = require("lodash");
```

# good

```js
import lodash from "lodash";
```

# 参考

- [import/no-commonjs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md)
