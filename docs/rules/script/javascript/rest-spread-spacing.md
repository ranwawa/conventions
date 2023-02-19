# rest-spread-spacing

禁用函数内没有 yield 的 generator 函数

### 为什么?

禁用函数内没有 yield 的 generator 函数

### 错误示例

```js
function* foo() {
  return 10;
}
```

### 正确示例

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

### 参考

- [rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)
