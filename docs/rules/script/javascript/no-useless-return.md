# no-useless-return

禁止无用的返回

### 为什么

一个没有任何返回值的`return;`语句是多余的，对函数的运行时行为没有任何影响。

### 建议

删除无用的返回语句

### 错误示例

```js
var foo = function () {
  return;
};
```

### 正确示例

```js
var foo = function () {
  return 520;
};
```

### 参考

- [no-useless-return](https://eslint.org/docs/rules/no-useless-return)
