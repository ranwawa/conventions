# dot-notation

强制默认参数放在最后

### 为什么?

将默认形参置于最后允许函数调用省略可选的尾部参数。

### 错误示例

```js
function f(a = 0, b) {}
```

### 正确示例

```js
function f(a, b = 0) {}
```

### 参考

- [dot-notation](https://eslint.org/docs/rules/dot-notation)
