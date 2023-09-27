# default-case-last

推荐在switch语句中将default子句放在最后

### 为什么?

在switch语句中，虽然JavaScript语法允许将default子句放在任何位置，但这样做可能会使代码阅读者感到困惑，毕竟是兜底逻辑嘛,兜底肯定放最底下才直观。

### 建议

在编写switch语句时，应将default子句放在所有case子句之后。

### 错误示例

```js
switch (foo) {
  default:
    bar();
    break;
  case 520:
    baz();
    break;
}
```

### 正确示例

```js
switch (foo) {
  case 520:
    baz();
    break;
  default:
    bar();
    break;
}
```

### 参考

- [default-case-last](https://eslint.org/docs/rules/default-case-last)
