# no-empty-pattern

不允许空函数

### 为什么?

空函数会降低可读性，箭头函数、普通函数、类方法除外。

### 错误示例

```js
function* foo() {}
```

### 正确示例

```js
function* foo() {
  // do nothing.
}
```

### 参考

- [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)
