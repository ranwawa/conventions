# no-implied-eval

禁止隐式的eval()

### 为什么

在JavaScript中，避免使用`eval()`被认为是一种好的实践。使用`eval()`会涉及到安全和性能问题，然而，还有一些其他的方式可以传递一个字符串并将其解释为JavaScript代码，这些方式也有类似的问题。

### 建议

避免使用`setTimeout()`, `setInterval()`或`execScript()`的方式传递字符串并将其解释为JavaScript代码。

### 错误示例

```js
setTimeout("alert('Hi!');", 100);
```

### 正确示例

```js
setTimeout(function () {
  alert('Hi!');
}, 100);
```

### 参考

- [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)
