# prefer-as-const

推荐使用`as const`而不是字面类型

### 为什么

在TypeScript中，有两种常见的方式声明字面量类型（例如`520`）：

- `as const`：告诉TypeScript自动推断字面类型
- `as`与字面类型：显式地告诉TypeScript字面类型

通常优先选择`as const`，因为它不需要重新输入字面值。

### 建议

使用`as const`替换带有显式字面类型

### 错误示例

```ts
let bar: 520 = 520;
```

### 正确示例

```ts
let foo = 'ranwawa' as const;
```

### 参考

- [prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)
