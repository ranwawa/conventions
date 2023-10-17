# prefer-promise-reject-errors

推荐Promise的reject方法中只抛出Error对象

### 为什么

Error对象会自动存储一个堆栈跟踪，可以用来通过确定错误来自何处来调试错误。如果Promise被一个非Error值拒绝，可能很难确定拒绝发生的位置。

### 建议

在Promise的reject方法中只抛出Error对象。

### 错误示例

```js
Promise.reject('ranwawa');
```

### 正确示例

```js
Promise.reject(new Error('ranwawa'));
```

### 参考

- [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)
