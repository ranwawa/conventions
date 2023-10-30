# prefer-destructuring

推荐使用解构

### 为什么

解构的语法看上去更加简洁,就像箭头函数一下,所有地方能用解构的都用解构,统一风格.

### 建议

使用解构语法来访问数组元素或对象属性。

### 错误示例

```javascript
const foo = array[0];
const { bar } = object.bar;
```

### 正确示例

```javascript
const [foo] = array;
const { bar } = object;
```

### 参考

- [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)
