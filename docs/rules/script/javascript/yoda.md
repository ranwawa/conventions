# yoda

需要把立即执行的函数包裹起来

### 为什么?

创建一个立即执行函数 (IIFE) 的一个通用技术是用括号包裹一个函数声明。

### 错误示例

```js
var x = (function () {
  return { y: 1 };
})(); // unwrapped
var x = (function () {
  return { y: 1 };
})(); // wrapped function expression
```

### 正确示例

```js
var x = (function () {
  return { y: 1 };
})(); // wrapped call expression
```

### 参考

- [yoda](https://eslint.org/docs/rules/yoda)
