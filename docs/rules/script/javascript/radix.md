# 禁止使用 RegExp 构造函数

## Why?

> 禁止使用 RegExp 构造函数，而使用正则表达式字面量

## bad

```js
new RegExp("abc");
```

## good

```js
/abc/;
new RegExp(pattern);
RegExp("abc", flags);
```

## 参考:

- [radix](https://eslint.org/docs/rules/radix)
