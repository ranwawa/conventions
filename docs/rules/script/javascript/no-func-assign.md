# 禁止不必要的分号

## Why?

> 输入错误和对需要分号位置的误解会导致不必要的分号,额外的分号可能会造成混淆。

## bad

```js
var x = 5;
function foo() {
  // code
}
```

## good

```js
var x = 5;
function foo() {
  // code
}
```

## 参考:

- [no-func-assign](https://eslint.org/docs/rules/no-func-assign)
