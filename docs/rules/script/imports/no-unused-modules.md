# no-unused-modules

禁止存在未使用的模块文件

### 为什么?

删除未使用的模块文件,有利于减少项目复杂度.随着项目增长,如果存在大量未实际使用的代码,会增加维护成本.

### 错误示例

```js
const name = 'zmn';
```

### 正确示例

```js
const name = 'zmn';
export default name;
```

### 参考

- [import/no-unused-modules](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md)
