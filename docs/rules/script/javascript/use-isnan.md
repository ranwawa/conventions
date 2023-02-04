# 禁止因使用 await 或 yield 而导致竞态条件的赋值

## Why?

> 在编写异步代码时，可能会产生微妙的竞态条件 bug。

## bad

```js
let result;

async function foo() {
  result += await something;
}
```

## good

```js
let result;

async function foobar() {
  result = (await something) + result;
}
```

## 参考:

- [use-isnan](https://eslint.org/docs/rules/use-isnan)
