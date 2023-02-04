# 禁止使用超出范围的数值

## Why?

> js 使用双精度浮点数做为数值,超出这个范围的会自动被丢弃,请使用范围内的值

## bad

```ts
type MaxNumber = 51230000000000011;
```

## good

```ts
type MaxNumber = 5123000000000001;
```

## 参考

- [@typescript-eslint/no-loss-of-precision](https://typescript-eslint.io/rules/no-loss-of-precision)
