# use-isnan

禁止与NaN进行比较

### 为什么

在JavaScript中，NaN是Number类型的特殊值，用于表示IEEE标准二进制浮点数算术规定的“非数字”值。由于NaN在JavaScript中的唯一性，它与任何值（包括其自身）都不相等，与NaN进行比较的容易误导新手。

### 建议

使用Number.isNaN()函数来测试一个值是否为NaN。

### 错误示例

```js
if (foo == NaN) {
  // ...
}
```

### 正确示例

```js
if (isNaN(foo)) {
  // ...
}
```

### 参考

- [use-isnan](https://eslint.org/docs/rules/use-isnan)
