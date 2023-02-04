# 不允许否定关系运算符的左操作数

## Why?

> 禁止对关系操作符的左操作数求反。

## bad

```js
if (!key in object) {
  // operator precedence makes it equivalent to (!key) in object
  // and type conversion makes it equivalent to (key ? "false" : "true") in object
}
```

## good

```js
if (!(key in object)) {
  // key is not in object
}
```

## 参考:

- [no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)
