# react/jsx-closing-tag-location

多行JSX元素的结束标签位置必须正确

### 为什么

保证样式统一

### 建议

将结束标签与开始标签对齐，并在自己的行上。

使用prettier进行自动格式化

### 错误示例

```jsx
<Hello>
  ranwawa
  </Hello>
```

### 正确示例

```jsx
<Hello>
  ranwawa
</Hello>
```

### 参考

- [react/jsx-closing-tag-location](https://eslint.org/docs/rules/react/jsx-closing-tag-location)