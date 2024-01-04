# react/jsx-no-duplicate-props

禁止在JSX中使用重复的属性

### 为什么

后面的属性会覆盖前面的属性。

### 建议

确保每个属性在JSX元素中只使用一次。

### 错误示例

```jsx
<Hello name="ranwawa" name="ranwawa" />
```

### 正确示例

```jsx
<Hello firstname="ranwawa" lastname="zhangshan" />
```

### 参考

- [react/jsx-no-duplicate-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md)
