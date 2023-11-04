# no-sequences

禁止使用逗号操作符

### 为什么

逗号操作符包含多个表达式，它从左到右评估每个操作数，并返回最后一个操作数的值，这样的代码简直看着要抓狂。

### 建议

永远不要使用`,`号操作数,除了在for循环以外

### 错误示例

```js
const bar = (3, 4);
```

### 正确示例

```js
let bar = 3;
bar = 4;
```

### 参考

- [no-sequences](https://eslint.org/docs/rules/no-sequences)
