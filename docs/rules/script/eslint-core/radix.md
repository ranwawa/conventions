# radix

必须在parseInt()函数中提供基数参数

### 为什么

默认情况下，parseInt()会自动检测十进制和十六进制（通过0x前缀）,x入参是以0x开头那就会有问题了。

### 建议

在使用parseInt()函数时，总是提供第二个参数，即基数, 一般是10。

### 错误示例

```js
parseInt('0xF'); // => 15
```

### 正确示例

```js
parseInt('0xF', 10); // => 10
```

### 参考

- [radix](https://eslint.org/docs/rules/radix)
