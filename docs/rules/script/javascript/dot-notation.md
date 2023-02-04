# 强制默认参数放在最后

## Why?

> 将默认形参置于最后允许函数调用省略可选的尾部参数。

## bad

```js
function f(a = 0, b) {}
```

## good

```js
function f(a, b = 0) {}
```

## 参考:

- [dot-notation](https://eslint.org/docs/rules/dot-notation)
