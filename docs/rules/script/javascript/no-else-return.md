# no-else-return

禁止在包含 return 语句的 if 块后出现 else 块

### 为什么

如果一个 `if` 块包含一个 `return` 语句，那么 `else` 块就变得不必要了。它的内容可以放在块的外面，从而减少代码的缩进级别。

### 建议

删除多余的`else`块

### 错误示例

```js
function foo(x, y, z) {
  if (x) {
    return y;
  } else {
    return z;
  }
}
```

### 正确示例

```js
function foo(x, y, z) {
  if (x) {
    return y;
  }

  return z;
}
```

### 参考

- [no-else-return](https://eslint.org/docs/rules/no-else-return)
