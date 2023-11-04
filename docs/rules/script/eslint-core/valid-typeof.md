# valid-typeof

必须使用正确的typeof比较

### 为什么

在绝大多数情况下，`typeof`操作符的结果是下面这些字面量：

- "undefined"
- "object"
- "boolean"
- "number"
- "string"
- "function"
- "symbol"
- "bigint"

将`typeof`操作符的结果与其他字符串字面量进行比较肯定要出错的嘛。

### 建议

只将`typeof`表达式与有效的字符串字面量进行比较。

### 错误示例

```js
if (typeof foo === 'ranwawa') {
  //
}
```

### 正确示例

```js
if (typeof foo === 'string') {
  //
}
```

### 参考

- [valid-typeof](https://eslint.org/docs/rules/valid-typeof)
