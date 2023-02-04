# 禁止在对象中使用不必要的计算属性

## Why?

> 使用不必要的计算属性是不必要的。

## bad

```js
var a = { ["0"]: 0 };
var a = { ["0+1,234"]: 0 };
var a = { [0]: 0 };
var a = { ["x"]: 0 };
var a = { ["x"]() {} };
```

## good

```js
var c = { a: 0 };
var c = { 0: 0 };
var a = { x() {} };
var c = { a: 0 };
var c = { "0+1,234": 0 };
```

## 参考:

- [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)
