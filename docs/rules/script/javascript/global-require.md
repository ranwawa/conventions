# global-require

强制数组方法的回调函数中有 return 语句

### 为什么?

在 JavaScript 中，回调模式是大多数 I/O 和事件驱动编程的核心。

### 错误示例

```js
function foo(err, callback) {
  if (err) {
    callback(err);
  }
  callback();
}
```

### 正确示例

```js
function foo(err, callback) {
  if (err) {
    return callback(err);
  }
  callback();
}
```

### 参考

- [global-require](https://eslint.org/docs/rules/global-require)
