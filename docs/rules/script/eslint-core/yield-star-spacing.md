# yield-star-spacing

`yield*`表达式中`*`的后面必须有空格

### 为什么

不加空格也得行,但是为了保持风格的统一,就都这样弄吧,你想想,如果天安门前的阅兵式上,军人们想怎么摆手就怎么摆手,那就没咱们中国军人的气势了,代码也是如此。

### 建议

在`yield*`表达式中的`*`后面添加空格,前面不用。

### 错误示例

```js
function*generator() {
  yield* other();
}
```

### 正确示例

```js
function* generator() {
  yield* other();
}
```

### 参考

- [yield-star-spacing](https://eslint.org/docs/rules/yield-star-spacing)
