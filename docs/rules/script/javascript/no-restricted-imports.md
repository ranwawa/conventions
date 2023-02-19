# no-restricted-imports

在导出中禁止指定名称

### 为什么?

不允许指定名称，会产生错误。

### 错误示例

```js
function foo() {}
export { foo as default };
export { default } from "some_module";

```

### 正确示例

```js
export default function foo() {}
```

### 参考

- [no-restricted-imports](https://eslint.org/docs/rules/no-restricted-imports)
