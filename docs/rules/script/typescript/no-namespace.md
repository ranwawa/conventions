# 禁止在类上使用 new 约束

## Why?

> 类可以作为类型使用,声明构造器约束时会自动根据 constructor 推断,而 interface 则必须显示指定 new,请不要搞混了

## bad

```ts
class C {
  new(): C;
}

interface I {
  constructor(): void;
}
```

## good

```ts
class C {
  constructor() {}
}
interface I {
  new (): C;
}
```

## 参考

- [@typescript-eslint/no-misused-new](https://typescript-eslint.io/rules/no-misused-new)
