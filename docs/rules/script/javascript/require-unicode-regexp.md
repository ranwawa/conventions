# require-unicode-regexp

禁止使用不带 await 表达式的 async 函数

### 为什么?

使用异步函数的主要原因通常是使用 await 操作符。

### 错误示例

```js
bar(async () => {
  doSomething();
});
```

### 正确示例

```js
bar(async () => {
  await doSomething();
});
```

### 参考

- [require-unicode-regexp](https://eslint.org/docs/rules/require-unicode-regexp)
