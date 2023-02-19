# arrow-parens

要求箭头函数体使用大括号

### 为什么?

可以强制或禁止箭头函数体使用大括号。

### 错误示例

```js
let foo = () => ({});
let foo = () => ({ bar: 0 });
```

### 正确示例

```js
let foo = () => {};
let foo = () => {
  return { bar: 0 };
};
```

### 参考

- [arrow-parens](https://eslint.org/docs/rules/arrow-parens)
