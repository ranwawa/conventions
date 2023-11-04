# no-loop-func

禁止在循环中创建函数

### 为什么

在循环中编写函数往往会由于函数围绕循环创建闭包的方式而导致错误。例如，你可能期望在循环中创建的每个函数返回不同的数字，但实际上，每个函数都返回10，因为这是作用域中`i`的最后一个值。

### 建议

使用`let`或`const`来解决这个问题，或者将函数移出循环。

### 错误示例

```js
for (var i = 10; i; i--) {
  (function () {
    return i;
  })();
}
```

### 正确示例

```js
for (let i = 10; i; i--) {
  var a = function () {
    return i;
  }; // OK, all references are referring to block scoped variables in the loop.
  a();
}
```

### 参考

- [no-loop-func](https://eslint.org/docs/rules/no-loop-func)
