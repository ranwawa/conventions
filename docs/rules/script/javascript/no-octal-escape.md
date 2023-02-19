# no-octal-escape

禁用八进制字面量

### 为什么?

在 JavaScript 代码中，八进制的前导数字零作为其标示一致是导致混淆和错误的来源。

### 错误示例

```js
var num = 071;
var result = 5 + 07;
```

### 正确示例

```js
var num = "071";
```

### 参考

- [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)
