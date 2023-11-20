# no-loss-of-precision

禁止使用会丢失精度的数字字面量

### 为什么

兼容eslint-core的规则

### 建议

关闭原始规则,启用ts的规则

### 错误示例

```js
const foo = 9007199254740993;
```

### 正确示例

```js
const foo = BigInt(9007199254740993);
```

### 参考

- [no-loss-of-precision](https://typescript-eslint.io/rules/no-loss-of-precision)
