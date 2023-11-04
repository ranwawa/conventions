# no-regex-spaces

禁止在正则表达式中使用多个空格

### 为什么

正则表达式可能非常复杂且难以理解，因此保持其尽可能简单以避免错误非常重要。在正则表达式中使用多个空格是更容易出错的操作之一。

### 建议

使用一个空格，然后指定期望的空格数。

### 错误示例

```js
/ranwawa   zhangshan/.test('ranwawa');
```

### 正确示例

```js
/ranwawa {3}zhangshan/.test('ranwawa');
```

### 参考

- [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)
