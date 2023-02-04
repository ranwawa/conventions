# 禁止在全局作用域中声明

## Why?

> 避免使用脚本局部变量“污染”全局作用域。

## bad

```js
var foo = 1;
function bar() {}
```

## good

```js
window.foo = 1;
window.bar = function () {};
```

## 参考:

- [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)
