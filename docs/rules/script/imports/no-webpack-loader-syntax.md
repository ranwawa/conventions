# no-webpack-loader-syntax

禁止使用 webpack loader 语法

### 为什么?

非标准的语法,降低代码可读性,也给不熟悉 webpack 的同事带来困扰.

### 建议

删除源代码中webpack loader相关的语法.统一在webpack配置文件中处理

### 错误示例

```js
import outer from 'xx-loader!../moduleA.js';
```

### 正确示例

```js
import outer from '../moduleA.js';
```

### 参考

- [import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)
