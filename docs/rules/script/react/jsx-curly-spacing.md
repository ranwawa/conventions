# react/jsx-curly-spacing

禁止在JSX属性和表达式的花括号内使用空格

### 为什么

统一风格

### 建议

在JSX属性和表达式的花括号内不要使用空格。

使用prettier进行自动格式化

### 错误示例

```jsx
<Hello name={ ranwawa } />;
```

### 正确示例

```jsx
<Hello name={ranwawa} />;
```

### 参考

- [react/jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)