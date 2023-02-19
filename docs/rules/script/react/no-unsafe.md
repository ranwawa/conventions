# no-unsafe

禁止内联 JSX props 之间有多个空格

why?

强制在同一行中的两个 JSX 属性或 JSX 标记名称和第一个 JSX 属性之间有一个空格,统一代码规范

### 错误示例

```jsx
<App  spacy />

<App too  spacy />
```

### 正确示例

```jsx
<App cozy />

<App very cozy />
```

### 参考

- [no-unsafe](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-unsafe)
