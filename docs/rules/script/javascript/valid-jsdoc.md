# 检查 NaN 时需要调用 isNaN()

## Why?

> 因为 NaN 在 JavaScript 中是唯一的，它不等于任何东西，包括它自己，所以与 NaN 比较的结果是令人困惑的。

## bad

```js
if (foo == NaN) {
  // ...
}
```

## good

```js
if (isNaN(foo)) {
  // ...
}
```

## 参考:

- [valid-jsdoc](https://eslint.org/docs/rules/valid-jsdoc)
