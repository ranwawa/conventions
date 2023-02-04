# 禁止将全局对象属性作为函数调用

## Why?

> ECMAScript 提供了几个按原样使用的全局对象。由于它们的大写(如 Math 和 JSON)，其中一些对象看起来像是构造函数，但如果试图将它们作为函数执行，则会抛出错误。

## bad

```js
var newMath = new Math();
var newReflect = new Reflect();
```

## good

```js
var object = JSON.parse("{}");
var value = Reflect.get({ x: 1, y: 2 }, "x");
```

## 参考:

- [no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)
