# 禁用不必要的转义

## Why?

> 对字符串、模板字面量和正则表达式中的常规字符进行转义，不会对结果产生任何影响。

## bad

```js
"\'";
'\"';
"\#";
```

## good

```js
"\"";
'\'';
"\x12";
```

## 参考:

- [no-useless-return](https://eslint.org/docs/rules/no-useless-return)
