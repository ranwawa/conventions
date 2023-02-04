# 禁用函数内没有 yield 的 generator 函数

## Why?

> 禁用函数内没有 yield 的 generator 函数

## bad

```js
function* foo() {
  return 10;
}
```

## good

```js
function* foo() {
  yield 5;
  return 10;
}

function foo() {
  return 10;
}

// This rule does not warn on empty generator functions.
function* foo() {}
```

## 参考:

- [rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)
