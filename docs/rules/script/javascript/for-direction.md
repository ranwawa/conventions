# 要求或者禁止 Yoda 条件

## Why?

> 在条件判断中字面量在先而变量在第二的位置。

## bad

```js
if ("red" === color) {
  // ...
}
```

## good

```js
if (value === "red") {
  // ...
}
```

## 参考:

- [for-direction](https://eslint.org/docs/rules/for-direction)
