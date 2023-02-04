# 在导出中禁止指定名称

## Why?

> 不允许指定名称，会产生错误。

## bad

```js
function foo() {}
export { foo as default };
export { default } from "some_module";

```

## good

```js
export default function foo() {}
```

## 参考:

- [no-restricted-imports](https://eslint.org/docs/rules/no-restricted-imports)
