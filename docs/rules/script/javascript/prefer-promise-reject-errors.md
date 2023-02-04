# 禁用 with 语句

## Why?

> with 是潜在的问题，因为它会在当前的域中增加对象成员，使得区分实际块中的变量指的是什么变的不可能。

## bad

```js
with (point) {
  r = Math.sqrt(x * x + y * y); // is r a member of point?
}
```

## good

```js
const r = ({ x, y }) => Math.sqrt(x * x + y * y);
```

## 参考:

- [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)
