# 禁止与 -0 进行比较

## Why?

> 这样比较毫无意义。

## bad

```js
if (x === -0) {
  // doSomething()...
}
```

## good

```js
if (x === 0) {
  // doSomething()...
}
```

## 参考:

- [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)
