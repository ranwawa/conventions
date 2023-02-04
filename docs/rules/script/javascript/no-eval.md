# 禁止与 null 进行比较

## Why?

> 与 null 进行比较时，null 其本身以及 null 与 undefined 比较结果都为 true。

## bad

```js
if (foo == null) {
  bar();
}
```

## good

```js
if (foo === null) {
  bar();
}
```

## 参考:

- [no-eval](https://eslint.org/docs/rules/no-eval)
