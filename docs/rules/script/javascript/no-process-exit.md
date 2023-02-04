# 禁用 process.env

## Why?

> Node.js 中的 process.env 对象用于存储部署或配置参数。在项目中随意使用它会作为另一个全局依赖会导致维护问题。

## bad

```js
if (process.env.NODE_ENV === "development") {
  //...
}
```

## good

```js
var config = require("./config");

if (config.env === "development") {
  //...
}
```

## 参考:

- [no-process-exit](https://eslint.org/docs/rules/no-process-exit)
