# no-invalid-regexp

禁止在嵌套块中使用变量或函数声明

### 为什么?

在 ES6 之前的 JavaScript 中，函数声明只允许出现在程序的第一级或另一个函数体中，尽管解析器有时会在其他地方错误地接受它们。这只适用于函数声明;命名或匿名函数表达式可以出现在表达式允许的任何地方。

### 错误示例

```js
if (test) {
  function doSomething() {}
} // ERROR: 'named' is readonly.
```

### 正确示例

```js
function doSomething() {}
```

### 参考

- [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)
