# react/no-danger

禁止使用危险的JSX属性

### 为什么

有可能引起XSS攻击

### 建议

避免使用dangerouslySetInnerHTML。

### 错误示例

```tsx
<div dangerouslySetInnerHTML={{ __html: 'ranwawa' }} />
```

### 正确示例

```tsx
<div>ranwawa</div>
```

### 参考

- [react/no-danger](https://eslint.org/docs/rules/react/no-danger)
