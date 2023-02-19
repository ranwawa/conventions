# prefer-object-has-own

建议在正则表达式中使用命名捕获组

### 为什么?

命名捕获组可以用于正则表达式中，这可以提高正则表达式的可读性。

### 错误示例

```js
const foo = /(ba[rz])/;
```

### 正确示例

```js
const foo = /(?<id>ba[rz])/;
```

### 参考

- [prefer-object-has-own](https://eslint.org/docs/rules/prefer-object-has-own)
