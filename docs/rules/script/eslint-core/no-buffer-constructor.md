# no-buffer-constructor

禁止使用Buffer构造函数

### 为什么

在Node.js中，`Buffer`构造函数的行为取决于其参数的类型。如果没有验证其类型就将用户输入的参数传递给`Buffer()`，可能会导致远程内存泄露和拒绝服务。

### 建议

使用`Buffer.from`，`Buffer.alloc`和`Buffer.allocUnsafe`替代`Buffer`构造函数。

### 错误示例

```js
new Buffer([1314, 666, 888]);
```

### 正确示例

```js
Buffer.from([1314, 666, 888]);
```

### 参考

- [no-buffer-constructor](https://eslint.org/docs/rules/no-buffer-constructor)
