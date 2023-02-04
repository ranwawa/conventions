# 要求或禁止模板字符串中的嵌入表达式周围空格的使用

## Why?

> 我们可以在模板字符串中使用 ${ 和 } 嵌入表达式。

## bad

```js
`hello, ${people.name}!`;
`hello, ${people.name}!`;
`hello, ${people.name}!`;
```

## good

```js
`hello, ${people.name}!`;
`hello, ${people.name}!`;
```

## 参考:

- [yield-star-spacing](https://eslint.org/docs/rules/yield-star-spacing)
