# adjacent-overload-signatures

必须把同个函数的重载签名放一起

### 为什么?

函数重载是针对一个函数的多种调用形式,集中管理有利于代码维护.

### 错误示例

```ts
export function foo(s: string): void;
export function foo(n: number): void;
export function bar(): void;
export function foo(sn: string | number): void;
```

### 正确示例

```ts
export function foo(s: string): void;
export function foo(n: number): void;
export function foo(sn: string | number): void;

export function bar(): void;
```

### 参考

- [@typescript-eslint/adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures)
