# no-async-promise-executor

禁止在Promise的executor函数中使用async函数

### 为什么

在Promise的executor函数中使用async函数通常是一个错误，因为如果async函数抛出错误，错误将会丢失，不会导致新构造的Promise被拒绝。使得调试和处理某些错误变得困难。

### 建议

不要在Promise的executor函数中使用async函数。

### 错误示例

```js
const foo = new Promise(async (resolve, reject) => {
  readFile('foo.txt', function (err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
```

### 正确示例

```js
const foo = new Promise((resolve, reject) => {
  readFile('foo.txt', function (err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
```

### 参考

- [no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)
