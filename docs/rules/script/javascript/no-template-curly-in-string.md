# 禁止稀疏数组

## Why?

> 稀疏数组包含空槽，最常见的原因是数组字面量中使用了多个逗号。

## bad

```js
var items = [,];
var colors = ["red", , "blue"];
```

## good

```js
var items = [];
var items = new Array(23);
```

## 参考:

- [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)
