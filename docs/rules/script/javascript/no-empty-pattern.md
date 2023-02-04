# 不允许空函数

## Why?

> 空函数会降低可读性，箭头函数、普通函数、类方法除外。

## bad

```js
function* foo() {}
```

## good

```js
function* foo() {
  // do nothing.
}
```

## 参考:

- [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)
