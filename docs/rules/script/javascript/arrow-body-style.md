# arrow-body-style

箭头函数体风格

### 为什么

箭头函数有两种函数体的语法形式。它们可以用块体（由大括号表示）`() => { ... }`定义，也可以用单个表达式`() => ...`定义，其值被隐式返回。

### 建议

当箭头函数体只有一个表达式时，可以省略大括号和return。

### 错误示例

```js
let foo = () => {
  return 520;
};
```

### 正确示例

```js
let foo = () => 520;
```

### 参考

- [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)
