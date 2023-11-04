# no-caller

禁止使用arguments.caller和arguments.callee

### 为什么

在ECMAScript 5的严格模式下禁止使用。

### 建议

使用函数名代替`arguments.caller`和`arguments.callee`。

### 错误示例

```js
[520, 1314, 666, 888, 5].map(function (n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```

### 正确示例

```js
[520, 1314, 666, 888, 5].map(function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
});
```

### 参考

- [no-caller](https://eslint.org/docs/rules/no-caller)
