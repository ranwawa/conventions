# prefer-named-capture-group

要求使用 Error 对象作为 Promise 拒绝的原因

### 为什么?

在 Promise 中只传递内置的 Error 对象实例给 reject() 函数作为自定义错误，被认为是个很好的实践。

### 错误示例

```js
Promise.reject("something bad happened");
```

### 正确示例

```js
Promise.reject(new Error("something bad happened"));
```

### 参考

- [prefer-named-capture-group](https://eslint.org/docs/rules/prefer-named-capture-group)
