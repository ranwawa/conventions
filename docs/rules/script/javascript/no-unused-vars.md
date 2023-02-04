# 禁止将 undefined 作为标识符

## Why?

> undefined 变量在 JavaScript 中是独一无二的，因为它实际上是一个全局对象属性。

## bad

```js
var foo = undefined;
var undefined = "foo";
if (foo === undefined) {
  // ...
}
function foo(undefined) {
  // ...
}
```

## good

```js
var foo = void 0;
var Undefined = "foo";
if (typeof foo === "undefined") {
  // ...
}
global.undefined = "foo";
```

## 参考:

- [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)
