# no-shadow

禁止变量名重复

### 为什么

变量名重复会导致代码阅读困难，且无法访问上层作用域中的同名变量。

### 建议

避免在同一作用域内使用相同的变量名。

### 错误示例

```js
const foo = 520;

function bar() {
  const foo = 1314;
}
```

### 正确示例

```js
const foo = 520;

function bar() {
  const baz = 1314;
}
```

### 参考

- [no-shadow](https://eslint.org/docs/rules/no-shadow)
