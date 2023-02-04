# 要求将变量声明放在它们作用域的顶部

## Why?

> avaScript 的解析器会隐式的将变量的声明移到它们所在作用域的顶部。

## bad

```js
f();
var a;
```

## good

```js
var a;
f();
```

## 参考:

- [wrap-iife](https://eslint.org/docs/rules/wrap-iife)
