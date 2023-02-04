# 禁用单行注释关闭 ts 检测功能

## Why?

> @ts-ignore,@ts-nocheck,@ts-expect-error 和 any 一样,会破坏类型推导.请使用正确的类型定义,时间来不及可以临时用 unknown 替代

## bad

```ts
// @ts-expect-error
// @ts-ignore
// @ts-nocheck
```

## good

```ts
// @ts-check
```

## 参考:

- [@typescript-eslint/ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)
