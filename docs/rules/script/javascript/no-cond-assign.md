# no-cond-assign

禁止在条件语句中使用赋值操作符

### 为什么

在条件语句中，很容易将比较操作符（如 `==`）误写为赋值操作符（如 `=`）。可能导致代码逻辑错误。

### 建议

在条件语句中使用比较操作符，而非赋值操作符。

### 错误示例

```js
let foo;
if ((foo = 520)) {
}
```

### 正确示例

```js
let foo;
if (foo === 520) {
}
```

### 参考

- [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)
