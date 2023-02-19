# jsx-no-target-blank

强制 jsx 缩进

why?

此规则旨在强制执行一致的缩进样式，默认样式是 4 spaces，统一代码规范

### 正确示例

```jsx
// 2 spaces indentation
<App>
  <Hello />
</App>

// no indentation
<App>
<Hello />
</App>

// 1 tab indentation
<App>
  <Hello />
</App>
```

### 参考

- [jsx-no-target-blank](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-target-blank)
