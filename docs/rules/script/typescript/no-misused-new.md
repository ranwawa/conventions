# no-misused-new

禁止在类上使用 new 约束

### 为什么?

类可以作为类型使用,声明构造器约束时会自动根据 constructor 推断,而 interface 则必须显示指定 new,请不要搞混了

### 错误示例

```ts
class C {
  new(): C;
}

interface I {
  constructor(): void;
}
```

### 正确示例

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
