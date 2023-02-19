# no-explicit-any

禁止使用 any

### 为什么?

ts 的主要目的就是类型检测,any 则会破坏类型检测.请使用具体类型或者 unknown 替代

### 错误示例

```ts
const foo: any = __dirname;
```

### 正确示例

```ts
const foo: string = __dirname;
```

## 参考

- [@typescript-eslint/no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
