# 禁止不必要的 catch 子句

## Why?

> 冗余子句可能会导致混乱和代码膨胀。

## bad

```js
try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
}
```

## good

```js
try {
  doSomethingThatMightThrow();
} catch (e) {
  doSomethingBeforeRethrow();
  throw e;
}
```

## 参考:

- [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)
