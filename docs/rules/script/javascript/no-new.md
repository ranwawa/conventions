# 禁止多行字符串

## Why?

> 在 JavaScript 中，可以在新行之前使用斜线创建多行字符串。

## bad

```js
var x =
  "Line 1 \
  Line 2";
```

## good

```js
var x = "Line 1\n" + "Line 2";
```

## 参考:

- [no-new](https://eslint.org/docs/rules/no-new)
