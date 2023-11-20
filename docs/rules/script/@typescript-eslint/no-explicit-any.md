# no-explicit-any

禁止使用`any`类型

### 为什么

any类型相当于是没有类型,既然用了ts,就明确的声明所有类型吧.

人生信条: 专业的事就要做到极致

### 建议

不要使用`any`类型，可以用`unknown`替代。

### 错误示例

```ts
const age: any = 'zhangshan';
```

### 正确示例

```ts
const age = 'zhangshan';
```

### 参考

- [no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
