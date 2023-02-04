# 禁止使用 any

## Why?

> ts 的主要目的就是类型检测,any 则会破坏类型检测.请使用具体类型或者 unknown 替代

## bad

```ts
const foo: any = __dirname;
```

## good

```ts
const foo: string = __dirname;
```

## 参考

- [@typescript-eslint/no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
