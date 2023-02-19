# no-mixed-requires

禁用 Buffer() 构造函数

### 为什么?

在 Node.js 中，Buffer 构造函数的行为取决于其参数的类型。

### 错误示例

```js
new Buffer(5);
new Buffer([1, 2, 3]);

Buffer(5);
Buffer([1, 2, 3]);

new Buffer(res.body.amount);
new Buffer(res.body.values);
```

### 正确示例

```js
Buffer.alloc(5);
Buffer.allocUnsafe(5);
Buffer.from([1, 2, 3]);

Buffer.alloc(res.body.amount);
Buffer.from(res.body.values);
```

### 参考

- [no-mixed-requires](https://eslint.org/docs/rules/no-mixed-requires)
