# 要求点操作符和属性放在同一行

## Why?

> 防止既在点号操作之前也在之后使用换行符。

## bad

```js
var foo = object.property;
```

## good

```js
var foo = object.property;
var bar = object.property;
```

## 参考:

- [eqeqeq](https://eslint.org/docs/rules/eqeqeq)
