# no-new

禁止多行字符串

### 为什么?

在 JavaScript 中，可以在新行之前使用斜线创建多行字符串。

### 错误示例

```js
var x =
  "Line 1 \
  Line 2";
```

### 正确示例

```js
var x = "Line 1\n" + "Line 2";
```

### 参考

- [no-new](https://eslint.org/docs/rules/no-new)
