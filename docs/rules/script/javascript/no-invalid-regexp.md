# no-invalid-regexp

禁止在 `RegExp` 构造函数中出现无效的正则表达式字符串

### 为什么

会导致运行时错误

### 建议

如果要使用特殊字符,用转义的方式进行标注

### 错误示例

```js
RegExp('[');
```

### 正确示例

```js
RegExp('\\[');
```

### 参考

- [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)
