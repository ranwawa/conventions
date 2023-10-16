# no-useless-escape

禁止无用的转义

### 为什么

在字符串、模板字面量和正则表达式中转义非特殊字符没有任何效果,哦对了,有一个效果,那就是故意误导人。

### 建议

移除无效的转义字符。

### 错误示例

```js
"\'";
```

### 正确示例

```js
"\"";
```

### 参考

- [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)
