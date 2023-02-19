# jsx-curly-spacing

验证 jsx 中的结束标签位置

### 为什么?

使代码更规范，此规则检查所有带有子元素（非自闭合）的 JSX 多行元素并验证结束标记的位置。期望是结束标签与开始标签在其自己的行上对齐。

### 错误示例

```jsx
<Hello>marklar</Hello>
```

### 正确示例

```jsx
<Hello>
  marklar
</Hello>

<Hello>marklar</Hello>
```

### 参考

- [jsx-curly-spacing](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-curly-spacing)
