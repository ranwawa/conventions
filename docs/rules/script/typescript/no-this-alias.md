# 禁止多余的非空断言

## Why?

> 非空断言在运行时可能会报错,如果确定类型不为空,请使用条件判断推导或直接修改类型

## bad

```ts
let a: string | null;

a!.split("");
```

## good

```ts
let a: string | null;

if (a) {
  a.split("");
}
```

## 参考

- [@typescript-eslint/no-non-null-assertion](https://typescript-eslint.io/rules/no-non-null-assertion)
