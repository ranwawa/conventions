# 禁止在字符串字面量中使用\8 和\9 转义序列

## Why?

> 在大多数 JavaScript 引擎中，字符串字面值中的\8 和\9 转义序列是允许的，并被视为“无用的”转义。

## bad

```js
var foo = "w8less";
var bar = "December 19";
```

## good

```js
var foo = "w8less";
var bar = "December 19";
```

## 参考:

- [no-octal](https://eslint.org/docs/rules/no-octal)
