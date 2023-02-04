# 禁止存在未使用的变量

## Why?

> 随着代码的增长,如果存在过多未使用的变量会影响代码的可读性和可维护性,请删掉未使用的变量

## bad

```ts
type Prop = string;
type State = number;

let prop: Prop;
```

## good

```ts
type Prop = string;

let prop: Prop;
```

## 参考

- [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)
