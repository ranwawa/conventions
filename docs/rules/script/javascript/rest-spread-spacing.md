# rest-spread-spacing

禁止在扩展运算符和它们的表达式之间添加空格

### 为什么

扩展运算符允许在其和操作的表达式之间添加空格，虽然上语法上允许,但这种骚操作很容易搞出问题来。

### 建议

在扩展运算符和它们的表达式之间不要添加空格。

### 错误示例

```js
const arr = [1, 2, 3];

console.log([... arr, 520, 1314, 666]);
```

### 正确示例

```js
const arr = [1, 2, 3];

console.log([...arr, 520, 1314, 666]);
```

### 参考

- [rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)
