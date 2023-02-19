# no-multi-str

禁止出现多个空格

### 为什么?

在某行中，出现多个空格而且不是用来作缩进的，通常是个错误。

### 错误示例

```js
var a = 1;
if (foo === "bar") {
}
```

### 正确示例

```js
var a = 1;
if (foo === "bar") {
}
```

### 参考

- [no-multi-str](https://eslint.org/docs/rules/no-multi-str)
