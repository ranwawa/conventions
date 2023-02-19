# no-floating-decimal

禁止 case 语句的失败

### 为什么?

JavaScript 中的 switch 语句是该语言中最容易出错的结构之一，这在一定程度上是因为它能够从一种情况“穿越”到另一种情况。

### 错误示例

```js
switch (foo) {
  case 1:
    doSomething();

  case 2:
    doSomething();
}
```

### 正确示例

```js
switch (foo) {
  case 1: {
    doSomething();
    // falls through
  }

  case 2: {
    doSomethingElse();
  }
}
```

### 参考

- [no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)
