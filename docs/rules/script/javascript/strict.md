# strict

强制在 yield* 表达式中 * 周围使用空格

### 为什么?

强制在 yield* 表达式中 * 左右使用空格。

### 错误示例

```js
function* generator() {
  yield* other();
}
```

### 正确示例

```js
function* generator() {
  yield* other();
}
```

### 参考

- [strict](https://eslint.org/docs/rules/strict)
