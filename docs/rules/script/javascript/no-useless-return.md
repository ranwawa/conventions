# no-useless-return

禁用不必要的转义

### 为什么?

对字符串、模板字面量和正则表达式中的常规字符进行转义，不会对结果产生任何影响。

### 错误示例

```js
"\'";
'\"';
"\#";
```

### 正确示例

```js
"\"";
'\'';
"\x12";
```

### 参考

- [no-useless-return](https://eslint.org/docs/rules/no-useless-return)
