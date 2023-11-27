# no-extra-non-null-assertion

禁止多余的非空断言

### 为什么

在TypeScript中, `!` 非空断言操作符用于断言一个值的类型不包括 `null` 或 `undefined`。在单个值上多次使用该操作符没有任何效果。

### 建议

只在必要的地方使用一次非空断言操作符。最好是不要用

### 错误示例

```ts
const foo: { bar: number } | null = null;
const bar = foo!!!.bar;
```

### 正确示例

```ts
const foo: { bar: number } | null = null;
const bar = foo!.bar;
```

### 参考

- [no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion)
