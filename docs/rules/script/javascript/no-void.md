# no-void

禁止多余的 return 语句

### 为什么?

语句是多余的，并且在函数执行过程中不会产生效果。这可能令人困惑，因此最好禁止使用这些多余的语句。

### 错误示例

```js
function foo() {
  return;
}
```

### 正确示例

```js
function foo() {
  return 5;
}
```

### 参考

- [no-void](https://eslint.org/docs/rules/no-void)
