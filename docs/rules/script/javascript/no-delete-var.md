# no-delete-var

禁止删除变量

### 为什么

delete操作符的目的是从对象中删除属性。用它来删变量,显然不会有预期的效果。

### 建议

只用delete删除对象上的属性

### 错误示例

```js
const foo = { name: 'ranwawa' };

delete foo;
```

### 正确示例

```js
const foo = { name: 'ranwawa' };

delete foo.name;
```

### 参考

- [no-delete-var](https://eslint.org/docs/rules/no-delete-var)
