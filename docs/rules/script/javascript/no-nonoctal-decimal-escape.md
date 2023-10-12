 # no-nonoctal-decimal-escape

禁止在字符串字面量中使用转义序列

### 为什么

在字符串字面量中，以反斜杠`\`开头的是转义字符串，比如`\n`是换行符,而`\数字`则是8进制转义.但是`\8`和`\9`转义后还是8和9,会被浏览器忽略。

### 建议

在字符串字面量中，不要使用`\8`和`\9`转义序列。

### 错误示例

```js
const foo = "\8这是一个8";
```

### 正确示例

```js
const foo = "8这是一个8";
```

### 参考

- [no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)