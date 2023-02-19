# no-unsafe-optional-chaining

不允许否定关系运算符的左操作数

### 为什么?

禁止对关系操作符的左操作数求反。

### 错误示例

```js
if (!key in object) {
  // operator precedence makes it equivalent to (!key) in object
  // and type conversion makes it equivalent to (key ? "false" : "true") in object
}
```

### 正确示例

```js
if (!(key in object)) {
  // key is not in object
}
```

### 参考

- [no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)
