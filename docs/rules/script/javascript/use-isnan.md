# use-isnan

禁止因使用 await 或 yield 而导致竞态条件的赋值

### 为什么?

在编写异步代码时，可能会产生微妙的竞态条件 bug。

### 错误示例

```js
let result;

async function foo() {
  result += await something;
}
```

### 正确示例

```js
let result;

async function foobar() {
  result = (await something) + result;
}
```

### 参考

- [use-isnan](https://eslint.org/docs/rules/use-isnan)
