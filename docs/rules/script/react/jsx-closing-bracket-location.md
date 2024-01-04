# react/jsx-closing-bracket-location

必须在JSX多行元素的开头标签位置对齐关闭标签

### 为什么

保证样式统一

### 建议

使用prettier进行自动格式化

### 错误示例

```tsx
<Hello
  lastName="zhangshan"
  firstName="lisi" />;

<Hello
  lastName="zhangshan"
  firstName="lisi"
  />;
```

### 正确示例

```tsx
<Hello firstName="lisi" lastName="zhangshan" />;

<Hello
  firstName="lisi"
  lastName="zhangshan"
/>;
```

### 参考

- [react/jsx-closing-bracket-location](https://eslint.org/docs/rules/react/jsx-closing-bracket-location)