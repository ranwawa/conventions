# 禁用八进制字面量

## Why?

> 在 JavaScript 代码中，八进制的前导数字零作为其标示一致是导致混淆和错误的来源。

## bad

```js
var num = 071;
var result = 5 + 07;
```

## good

```js
var num = "071";
```

## 参考:

- [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)
