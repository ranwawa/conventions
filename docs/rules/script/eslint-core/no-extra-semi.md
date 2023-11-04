# no-extra-semi

禁止不必要的分号

### 为什么

虽然技术上不是错误，但额外的分号在阅读代码时可能会引起混淆。

### 建议

删除不必要的分号。

### 错误示例

```js
const foo = 520;;
```

### 正确示例

```js
const foo = 520;
```

### 参考

- [no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)