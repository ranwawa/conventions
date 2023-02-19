# ban-ts-comment

禁用单行注释关闭 ts 检测功能

### 为什么?

@ts-ignore,@ts-nocheck,@ts-expect-error 和 any 一样,会破坏类型推导.请使用正确的类型定义,时间来不及可以临时用 unknown 替代

### 错误示例

```ts
// @ts-expect-error
// @ts-ignore
// @ts-nocheck
```

### 正确示例

```ts
// @ts-check
```

### 参考

- [@typescript-eslint/ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)
