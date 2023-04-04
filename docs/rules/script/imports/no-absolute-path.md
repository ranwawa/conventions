# no-absolute-path

禁止使用绝对路径导入模块

### 为什么?

绝对路径在多人协作时,因为不同开发人员电脑的目录结构不一致,导致无法解析模块的问题
请统一使用相对路径

### 错误示例

```js
import outer from '/outer.js';
```

### 正确示例

```js
import outer from '../outer.js';
```

### 参考

- [import/no-absolute-path](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)
