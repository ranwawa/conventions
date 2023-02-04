# 要求回调函数使用箭头函数

## Why?

> 简洁，易推理; 无论何时何地调用它，都是作用域绑定的。

## bad

```js
foo(function (a) {
  return a;
}); // ERROR
// prefer: foo(a => a)
foo(
  function () {
    return this.a;
  }.bind(this)
); // ERROR
// prefer: foo(() => this.a)
```

## good

```js
// arrow function callback
foo((a) => a); // OK
// generator as callback
foo(function* () {
  yield;
}); // OK
// function expression not used as callback or function argument
var foo = function foo(a) {
  return a;
}; // OK
// unbound function expression callback
foo(function () {
  return this.a;
}); // OK
// recursive named function callback
foo(function bar(n) {
  return n && n + bar(n - 1);
}); // OK
```

## 参考:

- [prefer-const](https://eslint.org/docs/rules/prefer-const)
