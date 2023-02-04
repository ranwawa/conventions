# 禁止使用 webpack loader 语法

## Why?

> 非标准的语法,降低代码可读性,也给不熟悉 webpack 的同事带来困扰.统一在 webpack 配置文件中处理

## bad

```js
import outer from "xx-loader!../outer.js";
```

## good

```js
import outer from "../outer.js";
```

## 参考:

- [import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)
