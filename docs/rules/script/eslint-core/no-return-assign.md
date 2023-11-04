# no-return-assign

禁止在return语句中使用赋值语句

### 为什么

在JavaScript中，赋值可以在几乎任何地方发生。有时候手欠本来是想写比较符号,却少写写成了一个等号,在使用`return`语句时尤其如此。

### 建议

不要在`return`语句中使用赋值。

### 错误示例

```js
const foo = (a, b) => (a = b);
```

### 正确示例

```js
const foo = (a, b) => a === b;
```

### 参考

- [no-return-assign](https://eslint.org/docs/rules/no-return-assign)
