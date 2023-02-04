# 需要把立即执行的函数包裹起来

## Why?

> 创建一个立即执行函数 (IIFE) 的一个通用技术是用括号包裹一个函数声明。

## bad

```js
var x = (function () {
  return { y: 1 };
})(); // unwrapped
var x = (function () {
  return { y: 1 };
})(); // wrapped function expression
```

## good

```js
var x = (function () {
  return { y: 1 };
})(); // wrapped call expression
```

## 参考:

- [yoda](https://eslint.org/docs/rules/yoda)
