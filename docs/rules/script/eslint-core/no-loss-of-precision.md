# no-loss-of-precision

禁止使用在运行时会丢失精度的数字字面量

### 为什么

在JS中，`Number`是按照IEEE 754标准存储为双精度浮点数的。最大的数字是2的53次方,超过的就会被截断。

### 建议

超大数字使用字符串类型表示

### 错误示例

```js
const foo = 9007199254740993;
```

### 正确示例

```js
const foo = '9007199254740993';
```

### 参考

- [no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)