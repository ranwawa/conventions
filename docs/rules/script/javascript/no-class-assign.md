# 强制 generator 函数中 \* 号周围使用一致的空格

## Why?

> 在 ECMAScript 6 中，Generators 是一个新的函数类型，随着时间的推移可以返回多个值。

## bad

```js
function* generator() {}

var shorthand = { *generator() {} };
```

## good

```js
function* generator() {}

var anonymous = function* () {};

var shorthand = { *generator() {} };
```

## 参考:

- [no-class-assign](https://eslint.org/docs/rules/no-class-assign)
