# no-confusing-arrow

禁止使用可能与比较运算符混淆的箭头函数

### 为什么

箭头函数(`=>`)在语法上和比较运算符(`>`, `<`, `<=`, `>=`)很像。混在一起用的时候,一眼晃上去很容易看错。

### 建议

在箭头函数的返回值是三元表达式时，使用括号包裹三元表达式，或者使用大括号和return语句。

### 错误示例

```js
const foo = bar => bar ? 1314 : 666;
```

### 正确示例

```js
const foo = (bar) => (bar ? 1314 : 666);

const foo2 = (bar) => { 
  return bar ? 1314 : 666 
};
```

### 参考

- [no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow)
