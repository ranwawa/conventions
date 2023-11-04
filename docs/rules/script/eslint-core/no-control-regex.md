# no-control-regex

禁止在正则表达式中使用控制字符

### 为什么

控制字符是ASCII范围0-31中的特殊、不可见的字符。这些字符在JavaScript字符串中很少使用，除了恶搞以外。

### 建议

避免在正则表达式中使用控制字符和匹配控制字符的一些转义序列。

### 错误示例

```js
const foo = /\x00/;
```

### 正确示例

```js
const bar = /\x20/;
```

### 参考

- [no-control-regex](https://eslint.org/docs/rules/no-control-regex)
