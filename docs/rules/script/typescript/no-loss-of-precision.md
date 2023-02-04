# 禁止给可推导的变量添加类型

## Why?

> ts 可明确推导的变量加上类型,增加了代码噪音,请删除掉

## bad

```ts
const name: string = "zmn";
```

## good

```ts
const name = "zmn";
```

## 参考

- [@typescript-eslint/no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)
