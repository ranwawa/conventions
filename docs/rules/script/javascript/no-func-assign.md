# no-func-assign

禁止重写函数声明

### 为什么

声明函数一般有两种方式,函数声明语句和函数表达式;

函数声明语句`function foo() {}`作用域会提升,重写它很容易出问题.

### 建议

使用函数表达式或者不要重写函数的值.

### 错误示例

```js
function foo() {}
foo = 'zhangshan';
```

### 正确示例

```js
var foo = function () {};
foo = 'zhangshan';
```

### 参考

- [no-func-assign](https://eslint.org/docs/rules/no-func-assign)
