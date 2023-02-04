# 要求使用 let 或 const 而不是 var

## Why?

> ECMAScript 6 允许程序员使用 let 和 const 关键字在块级作用域而非函数作用域下声明变量。块级作用域在很多其他编程语言中很普遍，能帮助程序员避免错误。

## bad

```js
var x = "y";
var CONFIG = {};
```

## good

```js
let x = "y";
const CONFIG = {};
```

## 参考:

- [object-shorthand](https://eslint.org/docs/rules/object-shorthand)
