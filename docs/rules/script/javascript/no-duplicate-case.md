# no-duplicate-case

禁止在对象文字中使用重复键

### 为什么?

在对象字面量中具有相同键的多个属性可能会导致应用程序中出现意外行为

### 错误示例

```js
var foo = {
  bar: "baz",
  bar: "qux",
};
```

### 正确示例

```js
var foo = {
  bar: "baz",
  quxx: "qux",
};
```

### 参考

- [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)
