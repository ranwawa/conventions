# 禁止多余的 return 语句

## Why?

> 语句是多余的，并且在函数执行过程中不会产生效果。这可能令人困惑，因此最好禁止使用这些多余的语句。

## bad

```js
function foo() {
  return;
}
```

## good

```js
function foo() {
  return 5;
}
```

## 参考:

- [no-void](https://eslint.org/docs/rules/no-void)
