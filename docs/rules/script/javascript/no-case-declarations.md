# 禁用 caller 或 callee(no-caller)

## Why?

> 禁止使用 arguments.caller 和 arguments.callee 来阻止使用不推荐的和次优化的代码。

## bad

```js
function foo(n) {
  if (n <= 0) {
    return;
  }
  arguments.callee(n - 1);
}
```

## good

```js
function foo(n) {
  if (n <= 0) {
    return;
  }
  foo(n - 1);
}
```

## 参考:

- [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)
