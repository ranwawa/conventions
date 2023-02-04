# 禁止原始包装实例

## Why?

> 会对 JavaScript 产生破坏性的问题。

## bad

```js
var stringObject = new String("Hello world");
var numberObject = new Number(33);
var booleanObject = new Boolean(false);

var stringObject = new String();
var numberObject = new Number();
var booleanObject = new Boolean();
```

## good

```js
var text = String(someValue);
var num = Number(someValue);

var object = new MyString();
```

## 参考:

- [no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)
