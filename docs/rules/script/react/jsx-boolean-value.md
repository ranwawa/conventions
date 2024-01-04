# react/jsx-boolean-value

禁止在JSX中使用布尔值属性

### 为什么

如果组件属性是boolean,默认值都是false,只要写了属性就是true,就像HTML原生input标签的disabled属性一样

所以业界流行的是只写属性而不写值,这样可以减少代码量。

### 建议

在JSX中使用布尔属性时，省略属性值。

### 错误示例

```tsx
const Hello = <Hello personal={true} />;
```

### 正确示例

```tsx
const Hello = <Hello personal />;
```

### 参考

- [react/jsx-boolean-value](https://eslint.org/docs/rules/react/jsx-boolean-value)
