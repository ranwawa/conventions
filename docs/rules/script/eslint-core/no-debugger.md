# no-debugger

禁止使用debugger

### 为什么

生产代码如果包含`debugger`，会导致浏览器停止执行代码，遇到那种不会关调试功能的人,整个网页就相当于挂掉了。

### 建议

直接在浏览器的源代码中打断点

### 错误示例

```js
function isTruthy(x) {
  debugger;
  return Boolean(x);
}
```

### 正确示例

```js
function isTruthy(x) {
  return Boolean(x);
}
```

### 参考

- [no-debugger](https://eslint.org/docs/rules/no-debugger)
