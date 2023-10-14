# no-redeclare

禁止重复声明变量

### 为什么

在JavaScript中，可以使用`var`重复声明同一个变量名。这可能会导致混淆，不清楚变量实际上在哪里声明和初始化。

### 建议

不要在同一作用域内多次声明同一个变量。

### 错误示例

```js
var foo = 520;
var foo = 1314;
```

### 正确示例

```js
const foo = 520;
const bar = 1314;
```

### 参考

- [no-redeclare](https://eslint.org/docs/rules/no-redeclare)