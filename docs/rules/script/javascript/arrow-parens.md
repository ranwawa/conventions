# 要求箭头函数体使用大括号

## Why?

> 可以强制或禁止箭头函数体使用大括号。

## bad

```js
let foo = () => ({});
let foo = () => ({ bar: 0 });
```

## good

```js
let foo = () => {};
let foo = () => {
  return { bar: 0 };
};
```

## 参考:

- [arrow-parens](https://eslint.org/docs/rules/arrow-parens)
