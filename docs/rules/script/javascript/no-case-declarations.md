# no-case-declarations

禁用 caller 或 callee(no-caller)

### 为什么?

禁止使用 arguments.caller 和 arguments.callee 来阻止使用不推荐的和次优化的代码。

### 错误示例

```js
function foo(n) {
  if (n <= 0) {
    return;
  }
  arguments.callee(n - 1);
}
```

### 正确示例

```js
function foo(n) {
  if (n <= 0) {
    return;
  }
  foo(n - 1);
}
```

### 参考

- [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)
