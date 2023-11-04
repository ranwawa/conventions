# no-lone-blocks

禁止无用的代码块

### 为什么

在ES6中，如果存在块级绑定(`let`和`const`)，类声明或函数声明（在严格模式下），代码块会创建新的作用域。除此之外的代码块都是多余的，多余的代码块降低了代码的可阅读性。

### 建议

删除无用的代码块

### 错误示例

```js
if (foo) {
  bar();
  {
    baz();
  }
}
```

### 正确示例

```js
if (foo) {
  if (bar) {
    baz();
  }
}
```

### 参考

- [no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)
