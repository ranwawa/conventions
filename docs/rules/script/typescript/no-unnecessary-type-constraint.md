# 禁止使用 module/namespace 关键字

## Why?

> 这两个关键字已经过期了,请使用 declare module 声明外部模块

## bad

```ts
module foo {}
namespace foo {}
```

## good

```ts
declare module "foo" {}
```

## 参考

- [@typescript-eslint/no-namespace](https://typescript-eslint.io/rules/no-namespace)
