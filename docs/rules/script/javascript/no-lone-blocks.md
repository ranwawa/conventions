# no-lone-blocks

禁止标记语句

### 为什么?

在 JavaScript 中，abel 语句与 break 和 continue 一起使用，以控制多个循环的流。

### 错误示例

```js
label: while (true) {
  // ...
}
```

### 正确示例

```js
var f = {
  label: "foo",
}; // Not using the `__iterator__` property.
```

### 参考

- [no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)
