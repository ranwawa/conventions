# 要求必须有基数

## Why?

> 在 parseInt()中始终使用基数以消除意想不到的后果。

## bad

```js
var num = parseInt("071");
```

## good

```js
var num = parseInt("071", 10);
```

## 参考:

- [require-await](https://eslint.org/docs/rules/require-await)
