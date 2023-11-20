# adjacent-overload-signatures

必须将函数重载签名放在一起

### 为什么

函数重载签名代表了函数可以被调用的多种方式，可能具有不同的返回类型。
如果将签名放在其他地方，阅读代码时可能会遗漏。

人生信条: 要有收拾有归纳

### 建议

将函数重载签名放在一起，不要被其他任何东西隔开。

### 错误示例

```ts
export function foo(s: 'ranwawa'): void;
export function foo(n: 520): void;
export function bar(): void;
export function foo(sn: 'ranwawa' | 520): void;
```

### 正确示例

```ts
export function foo(s: 'ranwawa'): void;
export function foo(n: 520): void;
export function foo(sn: 'ranwawa' | 520): void;
export function bar(): void;
```

### 参考

- [adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures)
