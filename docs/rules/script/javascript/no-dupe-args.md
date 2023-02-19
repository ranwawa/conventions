# no-dupe-args

禁用 debugger

### 为什么?

debugger 是开发过程中的调试器，不应该部署到线上 web 应用中。

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
  return Boolean(x); // set a breakpoint at this line
}
```

### 参考

- [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)
