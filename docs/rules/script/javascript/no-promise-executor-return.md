# no-promise-executor-return

禁止在Promise执行器函数中返回值

### 为什么

Promise的执行器函数的返回值会被忽略，因为返回的值无法被使用，也不会对Promise产生任何影响。

### 建议

只需要使用resolve,reject函数即可

### 错误示例

```js
const res = new Promise((resolve) => {
  resolve('ranwawa');

  return 'ranwawa';
});
```

### 正确示例

```js
const res = new Promise((resolve) => {
  resolve('ranwawa');
});
```

### 参考

- [no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)
