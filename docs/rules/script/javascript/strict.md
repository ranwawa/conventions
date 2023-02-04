# 强制在 yield* 表达式中 * 周围使用空格

## Why?

> 强制在 yield* 表达式中 * 左右使用空格。

## bad

```js
function* generator() {
  yield* other();
}
```

## good

```js
function* generator() {
  yield* other();
}
```

## 参考:

- [strict](https://eslint.org/docs/rules/strict)
