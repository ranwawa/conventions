# no-empty-function

禁止空函数

### 为什么

主要是兼容ts的一些特定函数,避免与eslint-core的规则冲突

### 建议

关掉eslint的原始规则,启用ts的规则

### 错误示例

```ts
class Foo {
  private constructor() {}
}
```

### 正确示例

```js
function foo() {
  // 这个函数是有意为空的，因为...
}
```

### 参考

- [no-empty-function](https://typescript-eslint.io/rules/no-empty-function)
