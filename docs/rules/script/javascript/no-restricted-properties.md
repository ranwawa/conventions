# 禁止重新声明变量

## Why?

> 在 JavaScript 中，使用 var 可以对同一个变量再次声明。这会使变量实际声明和定义的位置混乱不堪。

## bad

```js
var a = 3;
var a = 10;
```

## good

```js
var a = 3;
// ...
a = 10;
```

## 参考:

- [no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)
