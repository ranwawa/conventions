# no-octal-escape

禁止在字符串中使用八进制转义序列

### 为什么

根据ECMAScript 5规范，字符串字面量中的八进制转义序列已被弃用，不应再使用。

### 建议

在字符串中使用Unicode或者十六进制转义序列代替八进制转义序列。

### 错误示例

```js
const foo = "Copyright \251";
```

### 正确示例

```js
const foo = "Copyright \u00A9"; // unicode
const bar = "Copyright \xA9"; // 16进制
```

### 参考

- [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)