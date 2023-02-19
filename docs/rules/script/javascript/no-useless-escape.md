# no-useless-escape

禁止没有必要的字符拼接

### 为什么?

把两个字符拼接在一起是没有必要的。

### 错误示例

```js
var a = `some` + `string`;
```

### 正确示例

```js
var c = a + b;
```

### 参考

- [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)
