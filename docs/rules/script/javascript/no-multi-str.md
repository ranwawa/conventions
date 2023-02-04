# 禁止出现多个空格

## Why?

> 在某行中，出现多个空格而且不是用来作缩进的，通常是个错误。

## bad

```js
var a = 1;
if (foo === "bar") {
}
```

## good

```js
var a = 1;
if (foo === "bar") {
}
```

## 参考:

- [no-multi-str](https://eslint.org/docs/rules/no-multi-str)
