# no-misleading-character-class

禁止丢失精度的文字数字

### 为什么?

该规则将不允许使用在运行时转换为 JS number 时由于 64 位浮点舍入而立即失去精度的数字字面值。

### 错误示例

```js
const x = 0.123;
const x = 0x20000000000001;
```

### 正确示例

```js
const x = 12300000000000000000000000;
const x = 0x1fffffffffffff;
```

### 参考

- [no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)
