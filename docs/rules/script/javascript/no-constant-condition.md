# 禁用操作不影响值的表达式

## Why?

> 这些错误在操作符优先级容易误判的复杂表达式中尤其常见。

## bad

```js
const value2 = condition ? x : {} || DEFAULT;
const objIsEmpty = someObj === {};
```

## good

```js
Console.log("Hello world!");
const objIsEmpty = Object.keys(someObj).length === 0;
```

## 参考:

- [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)
