# 强制剩余和扩展运算符及其表达式之间有空格

## Why?

> ES2015 引入了 rest 和 spread 操作符，它们将可迭代结构扩展到各个部分.和其他运算符一样，若允许在剩余和扩展运算符及其运算表达式之间有空格，可能导致同一个代码库的空格不一致.

## bad

```js
fn(... args)
[... arr, 4, 5, 6]
let [a, b, ... arr] = [1, 2, 3, 4, 5];
function fn(... args) { console.log(args); }
let { x, y, ... z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ... z };

```

## good

```js
fn(...args)
[...arr, 4, 5, 6]
let [a, b, ...arr] = [1, 2, 3, 4, 5];
function fn(...args) { console.log(args); }
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ...z };
```

## 参考:

- [sort-imports](https://eslint.org/docs/rules/sort-imports)
