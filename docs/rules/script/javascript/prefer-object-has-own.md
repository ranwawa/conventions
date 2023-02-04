# 建议在正则表达式中使用命名捕获组

## Why?

> 命名捕获组可以用于正则表达式中，这可以提高正则表达式的可读性。

## bad

```js
const foo = /(ba[rz])/;
```

## good

```js
const foo = /(?<id>ba[rz])/;
```

## 参考:

- [prefer-object-has-own](https://eslint.org/docs/rules/prefer-object-has-own)
