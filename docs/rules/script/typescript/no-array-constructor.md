# 禁止使用内置类做为类型

## Why?

> 混合使用 String,string 会使代码产生混乱,请统一使用小写的 ts 内置类型

## bad

```ts
type MyType = String | Boolean;
```

## good

```ts
type MyType = string | boolean;
```

## 参考

- [@typescript-eslint/ban-types](https://typescript-eslint.io/rules/ban-types/)
