# no-useless-catch

禁止无用的catch

### 为什么

只重新抛出原始错误的 `catch` 子句是多余的，对程序的运行行为没有影响。这些冗余的子句可能会引起混淆和代码膨胀，所以最好禁止这些不必要的 `catch` 子句。

### 建议

在catch子句中处理错误，比如输出明确的错误信息,或者将错误信息上传到错误追踪系统,而不是简单的重新抛出。

### 错误示例

```js
try {
  const name = 'ranwawa';
} catch (e) {
  throw e;
}
```

### 正确示例

```js
try {
  const name = 'ranwawa';
} catch (e) {
  console.log('[awawa]此处代码有异常', e);
  throw e;
}
```

### 参考

- [no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)
