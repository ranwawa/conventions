# 禁止使用异步函数作为 Promise executor

## Why?

> 异步 executor 函数抛出一个错误，这个错误将会丢失，并且不会导致新构造的 Promise 被拒绝。这可能使会调试和处理一些错误变得困难。

## bad

```js
const result = new Promise(async (resolve, reject) => {
  resolve(await foo);
});
```

## good

```js
const result = Promise.resolve(foo);
```

## 参考:

- [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)
