# react/jsx-indent-props

必须使用2个空格缩进JSX中的属性

### 为什么

统一风格

### 建议

使用prettier进行自动格式化

### 错误示例

```jsx
// 4个空格的缩进
<Hello
    firstName="zhangshan"
/>
```

### 正确示例

```jsx
// 2个空格的缩进
<Hello
  firstName="zhangshan"
/>
```

### 参考

- [react/jsx-indent-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md)