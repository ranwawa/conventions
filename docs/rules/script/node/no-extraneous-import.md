# 禁止使用废弃的 API

## Why?

> 废弃的 API 在后续版本会被移出,使用废弃 API 可能产生潜在 BUG,请用新的 API 替代

## bad

```js
const fs = require("fs");

fs.exists("./foo.js", function () {
  console.log("...");
});
```

## good

```js
const fs = require("fs");

fs.stat("./foo.js", function () {
  console.log("...");
});
```

## 参考

- [node/no-deprecated-api](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md)
