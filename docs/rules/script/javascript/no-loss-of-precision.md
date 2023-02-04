# 禁止不规则空格

## Why?

> 无效或不规则的空格会导致 ECMAScript 5 解析器出现问题，并使代码难以调试，类似于混合制表符和空格。

## bad

```js
function thing() /*<NBSP>*/ {
  return "test";
}
```

## good

```js
function thing() {
  return " <NBSP>thing";
}
```

## 参考:

- [no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)
