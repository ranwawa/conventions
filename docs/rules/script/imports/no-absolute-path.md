# no-absolute-path

禁止使用绝对路径导入模块

### 为什么?

绝对路径在发布到 npm 仓库后或者其他同事开发时无法使用,统一使用相对路径

### 错误示例

```js
import outer from "/outer.js";
```

### 正确示例

```js
import outer from "../outer.js";
```

### 参考

- [import/no-absolute-path](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)
