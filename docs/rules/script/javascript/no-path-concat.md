# 禁止调用 require 时使用 new 操作符

## Why?

> require 方法被用来引入不同文件中模块。

## bad

```js
var appHeader = new require("app-header");
```

## good

```js
var AppHeader = require("app-header");
var appHeader = new AppHeader();
```

## 参考:

- [no-path-concat](https://eslint.org/docs/rules/no-path-concat)
