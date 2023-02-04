# 禁用**proto**

## Why?

> **proto** 属性在 ECMAScript 3.1 中已经被弃用，并且不应该在代码中使用。使用 Object.getPrototypeOf 和 Object.setPrototypeOf 代替。

## bad

```js
var a = obj.__proto__;
```

## good

```js
var a = Object.getPrototypeOf(obj);
```

## 参考:

- [no-redeclare](https://eslint.org/docs/rules/no-redeclare)
