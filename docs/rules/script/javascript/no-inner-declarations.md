# no-inner-declarations

禁止在块级作用域中出现函数声明

### 为什么

函数声明会存在作用域提升的问题,看上去是在代码块中声明的,但在外面也能够访问的到.不符合块级作用域的使用习惯.

### 建议

直接把函数声明提升到根作用域或者使用赋值语句绕开限制.

### 错误示例

```js
if (test) {
  function doSomething() {}
}
```

### 正确示例

```js
let fn;
if (test) {
  fn = function fnExpression() {};
}
```

### 参考

- [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)
