# prefer-promise-reject-errors

禁用 with 语句

### 为什么?

with 是潜在的问题，因为它会在当前的域中增加对象成员，使得区分实际块中的变量指的是什么变的不可能。

### 错误示例

```js
with (point) {
  r = Math.sqrt(x * x + y * y); // is r a member of point?
}
```

### 正确示例

```js
const r = ({ x, y }) => Math.sqrt(x * x + y * y);
```

### 参考

- [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)
