# arrow-body-style

禁止在直接返回值的箭头函数里使用花括号

### 为什么?

箭头函数有两种语法形式，一种是块体（用大括号表示）`() => { ... }`，另一种是单个表达式 `() => ...`，其值被隐式返回。使用后者可以提高代码简洁性。

### 建议

当箭头函数是简单的表达式语句时,直接返回即可,不用添加return关键字

### 错误示例

```js
const foo = () => {
  return 520;
};
const bar = () => {
  return {
    name: 'ranwawa'
  };
};
```

### 正确示例

```js
const foo = () => 520;
const bar = () => ({
  name: 'ranwawa'
});
```

### 参考

- [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)
