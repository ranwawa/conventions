# no-non-null-assertion

禁止使用非空断言操作符`!`

### 为什么

TypeScript的非空断言操作符`!`用于向类型系统断言一个表达式是非空的，即不是`null`或`undefined`。虽然没有any的问题严重,但也算得上是半个any了.

### 建议

使用可选链操作符`?.`和空值合并操作符`??`来替代非空断言操作符`!`

### 错误示例

```ts
interface Example {
  property?: string;
}

declare const example: Example;
console.log(example.property!.includes('baz'));
```

### 正确示例

```ts
interface Example {
  property?: string;
}

declare const example: Example;
console.log(example.property?.includes('baz'));
```

### 参考

- [no-non-null-assertion](https://typescript-eslint.io/rules/no-non-null-assertion)
