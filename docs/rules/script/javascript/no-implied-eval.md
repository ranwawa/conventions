# no-implied-eval

禁止在全局作用域中声明

### 为什么?

避免使用脚本局部变量“污染”全局作用域。

### 错误示例

```js
var foo = 1;
function bar() {}
```

### 正确示例

```js
window.foo = 1;
window.bar = function () {};
```

### 参考

- [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)
