# no-floating-decimal

禁止省略浮点数中的0

### 为什么

在JavaScript中，浮点数包含一个小数点，小数点前后的数字并不是必需的。虽然这不是语法错误，但这种数字的格式可能使得真正的小数和点运算符难以区分。因此，有些人建议你应该在小数点前后都包含一个数字，以明确你的意图是创建一个小数。

### 建议

在小数点前后都包含一个数字。

### 错误示例

```js
const foo = .5;
const bar = 2.;
```

### 正确示例

```js
const foo = 0.5;
const bar = 2.0;
```

### 参考

- [no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)
