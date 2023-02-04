# 禁用 debugger

## Why?

> debugger 是开发过程中的调试器，不应该部署到线上 web 应用中。

## bad

```js
function isTruthy(x) {
  debugger;
  return Boolean(x);
}
```

## good

```js
function isTruthy(x) {
  return Boolean(x); // set a breakpoint at this line
}
```

## 参考:

- [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)
