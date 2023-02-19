# no-useless-concat

禁止不必要的 catch 子句

### 为什么?

冗余子句可能会导致混乱和代码膨胀。

### 错误示例

```js
try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
}
```

### 正确示例

```js
try {
  doSomethingThatMightThrow();
} catch (e) {
  doSomethingBeforeRethrow();
  throw e;
}
```

### 参考

- [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)
