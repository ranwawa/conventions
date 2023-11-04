# prefer-spread

推荐使用扩展运算符

### 为什么

在ES2015之前，必须使用`Function.prototype.apply()`来调用可变参数函数。但在ES2015中，使用扩展语法来调用可变参数函数，代码就简洁和多了。

### 建议

需要将参数打散传递给一个函数时,都用扩展运算符

### 错误示例

```js
const foo = (a, b, c) => console.log(a, b, c);

foo.apply(undefined, [520, 1314, 666]);
```

### 正确示例

```js
const foo = (a, b, c) => console.log(a, b, c);

foo(...[520, 1314, 666]);
```

### 参考

- [prefer-spread](https://eslint.org/docs/rules/prefer-spread)
