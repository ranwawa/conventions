# aria-role

ARIA 状态和属性值必须有效

### 错误示例

```jsx
<!-- Bad: the aria-hidden state is of type true/false -->
<span aria-hidden="yes">foo</span>
```

### 正确示例

```jsx
<!-- Good: the aria-hidden state is of type true/false -->
<span aria-hidden="true">foo</span>
```

### 参考

- [aria-role](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/aria-role)
