# no-unused-expressions

禁止无效表达式

### 为什么

无效表达式对程序状态没有影响，例如，`n + 1;`并不是语法错误，但没得用，

### 建议

避免使用无效表达式，确保每个表达式都对程序状态有影响。

### 错误示例

```js
a || b;
```

### 正确示例

```js
a && b();
```

### 参考

- [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)
