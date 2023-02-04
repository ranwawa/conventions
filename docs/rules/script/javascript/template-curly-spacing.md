# 要求 symbol 描述

## Why?

> 使用 描述 更容易促进调试。

## bad

```js
var foo = Symbol();
```

## good

```js
var foo = Symbol("some description");
var someString = "some description";
var bar = Symbol(someString);
```

## 参考:

- [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)
