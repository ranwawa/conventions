# no-webpack-loader-syntax

no-webpack-loader-syntax

禁止使用 webpack loader 语法

### 为什么?

非标准的语法,降低代码可读性,也给不熟悉 webpack 的同事带来困扰.统一在 webpack 配置文件中处理

### 错误示例

```js
import outer from "xx-loader!../outer.js";
```

### 正确示例

```js
import outer from "../outer.js";
```

### 参考

- [import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)
