# @ranwawa/export

禁止导出重名的模块

### 为什么?

在同一个文件中,使用重复的名称导出相模块,会导致运行时异常

请删除重复的模块导出语句.

### 错误示例

```js
export const foo = 'ranwawa';

export { foo }; // -> SyntaxError: Duplicate export of 'a'
```

```js
const foo = 'ranwawa';
const bar = 'zhangsan';

export default foo;
export default bar; // -> Uncaught SyntaxError: Identifier '.default' has already been declared
```

### 正确示例

```js
export const a = 'ranwawa';
```

```js
const foo = 'ranwawa';

export default foo;
```

### 参考

- [import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)
