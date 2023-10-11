# no-multi-str

禁止使用多行字符串

### 为什么

在JavaScript中，通过在换行符前使用斜杠可以创建多行字符串，这样的代码可读特性特别差。

### 建议

建议使用字符串连接的方式来创建多行字符串。

### 错误示例

```js
const foo =
  'ranwawa \
zhangshan';
```

### 正确示例

```js
const foo = 'ranwawa ' + 'zhangshan';
```

### 参考

- [no-multi-str](https://eslint.org/docs/rules/no-multi-str)
