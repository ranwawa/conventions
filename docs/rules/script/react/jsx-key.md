# jsx-key

验证 jsx 中的 props 缩进

### 为什么?

规则旨在强制执行一致的缩进样式，统一代码规范，默认样式是 4 spaces.

### 错误示例

```jsx
// 2 spaces indentation
<Hello
  firstName="John"
/>

// no indentation
<Hello
firstName="John"
/>

// 1 tab indentation
<Hello
  firstName="John"
/>

```

### 正确示例

```jsx
<Hello firstName="John" />
```

### 参考

- [jsx-key](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-key)
