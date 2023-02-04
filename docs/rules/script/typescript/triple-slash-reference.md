# 禁止使用原始值字面量作为类型

## Why?

> 使用原始值字面量作为类型影响可阅读性,请使用常量断言替代

## bad

```ts
let bar: 2 = 2;
```

## good

```ts
let bar = 2 as const;
```

## 参考

- [@typescript-eslint/prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)
