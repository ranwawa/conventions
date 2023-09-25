# curly

推荐使用花括号包裹代码块

### 为什么?

虽然JavaScript允许在只有一条语句的代码块中省略花括号，但在所有团队成员统一代码风格，有利于提升整个团队的代码可读性。

### 建议

建议总是使用花括号包裹代码块，即使它们是可选的。

### 错误示例

```js
if (foo) foo++;
```

### 正确示例

```js
if (foo) {
  foo++;
}
```

### 参考

- [curly](https://eslint.org/docs/rules/curly)
