# 强制数组方法的回调函数中有 return 语句

## Why?

> 在 JavaScript 中，回调模式是大多数 I/O 和事件驱动编程的核心。

## bad

```js
function foo(err, callback) {
  if (err) {
    callback(err);
  }
  callback();
}
```

## good

```js
function foo(err, callback) {
  if (err) {
    return callback(err);
  }
  callback();
}
```

## 参考:

- [global-require](https://eslint.org/docs/rules/global-require)
