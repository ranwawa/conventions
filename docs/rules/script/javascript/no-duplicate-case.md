# 禁止在对象文字中使用重复键

## Why?

> 在对象字面量中具有相同键的多个属性可能会导致应用程序中出现意外行为

## bad

```js
var foo = {
  bar: "baz",
  bar: "qux",
};
```

## good

```js
var foo = {
  bar: "baz",
  quxx: "qux",
};
```

## 参考:

- [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)
