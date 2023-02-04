# 禁止在正则表达式中使用控制字符

## Why?

> 在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符。这些字符很少被用在 JavaScript 字符串中，所以一个正则表达式如果包含这些字符的，很有可能一个错误。

## bad

```js
var pattern1 = /\x1f/;
var pattern2 = new RegExp("\x1f");
```

## good

```js
var pattern1 = /\x20/;
var pattern2 = new RegExp("\x20");
```

## 参考:

- [no-debugger](https://eslint.org/docs/rules/no-debugger)
