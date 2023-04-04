# no-anonymous-default-export

禁止默认导出匿名表达式

### 为什么?

默认导出匿名表达式,该表达式就只能在其他模块中使用,而无法在当前模块使用,降低了代码的可变性.
请将表达式赋值给一个变量,然后再默认导出具名的变量

### 错误示例

```js
export default 'ranwawa'
export default class {}
```

### 正确示例

```js
const foo = 'ranwawa';
export default foo;
```

```js
export default class MyClass {}
```

### 参考

- [no-anonymous-default-export](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md)
