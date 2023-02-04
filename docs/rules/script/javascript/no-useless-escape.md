# 禁止没有必要的字符拼接

## Why?

> 把两个字符拼接在一起是没有必要的。

## bad

```js
var a = `some` + `string`;
```

## good

```js
var c = a + b;
```

## 参考:

- [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)
