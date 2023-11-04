 # no-octal

禁止使用八进制字面量

### 为什么

八进制字面量是以前导零开始的数字，如`071`。ECMAScript 5已弃用八进制数字字面量的使用。

### 建议

不要使用八进制字面量，直接用10进制。

### 错误示例

```js
const num = 011 // => 实际上是11;
```

### 正确示例

```js
const num  = 8;
```

### 参考

- [no-octal](https://eslint.org/docs/rules/no-octal)