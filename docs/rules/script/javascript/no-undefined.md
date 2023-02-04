# 禁止将变量初始化为 undefined

## Why?

> 在 JavaScript 中，声明一个变量但未初始化，变量会自动获得 undefined 作为初始值。

## bad

```js
var foo = undefined;
let bar = undefined;
```

## good

```js
var foo;
let bar;
const baz = undefined;
```

## 参考:

- [no-undefined](https://eslint.org/docs/rules/no-undefined)
