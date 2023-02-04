# 禁止不必要的括号

## Why?

> 限制只在必要的地方使用括号，目的是使代码阅读起来更清晰。

## bad

```js
const Component = <div />;
```

## good

```js
const Component = (
  <div>
    <p />
  </div>
);
```

## 参考:

- [no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)
