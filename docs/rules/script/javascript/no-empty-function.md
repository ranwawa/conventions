# no-empty-function

禁止 if 语句中 return 语句后的 else 块

### 为什么?

更好的理解阅读 JavaScript 代码。

### 错误示例

```js
function foo() {
  if (error) {
    return "It failed";
  } else if (loading) {
    return "It's still loading";
  }
}
```

### 正确示例

```js
function foo() {
  if (error) {
    return "It failed";
  }

  if (loading) {
    return "It's still loading";
  }
}
```

### 参考

- [no-empty-function](https://eslint.org/docs/rules/no-empty-function)
