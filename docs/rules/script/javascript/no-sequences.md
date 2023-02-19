# no-sequences

禁止自身比较

### 为什么?

变量与其自身进行比较通常来说是一个错误，要么是打字错误要么是重构错误。它都会给读者造成困扰并且可能会引入运行错误。

### 错误示例

```js
var x = 10;
if (x === x) {
  x = 20;
}
```

### 正确示例

```js
if (x === 10) {
  x = 20;
}
```

### 参考

- [no-sequences](https://eslint.org/docs/rules/no-sequences)
