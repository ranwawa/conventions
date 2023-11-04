# require-yield

必须在生成器函数中使用yield关键字

### 为什么

生成器函数应该包含yield关键字，否则它就是一个普通函数，那就是写了一个假的生成哭喊。

### 建议

在生成器函数中添加yield关键字。

### 错误示例

```js
function* foo() {
  return 10;
}
```

### 正确示例

```js
function* foo() {
  yield 5;
  return 10;
}
```

### 参考

- [require-yield](https://eslint.org/docs/rules/require-yield)
