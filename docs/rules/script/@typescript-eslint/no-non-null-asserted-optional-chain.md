# no-non-null-asserted-optional-chain

禁止在可选链表达式后使用非空断言

### 为什么

可选链表达式`?.`在对象为`null`或`undefined`时提供`undefined`。明明已经不是非空的了,再搞个非空断言,就是画蛇添足嘛

### 建议

不要在可选链表达式后使用非空断言。

### 错误示例

```ts
foo?.bar!;
foo?.bar()!;
```

### 正确示例

```ts
foo?.bar;
foo?.bar();
```

### 参考

- [no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)
