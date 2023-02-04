# 禁止在表达式中对左操作数求反

## Why?

> 就像开发人员可能会输入-a + b 来表示负数-(a + b)一样，他们可能会错误地在 object 中输入!key 来测试键不在对象中。

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

- [require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)
