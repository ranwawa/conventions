# no-distracting-elements

强制在元素上不使用 autoFocus

why?

自动对焦元素可能会导致有视力和无视力用户的可用性问题，等等

### 错误示例

```jsx
<div accessKey="h" />
```

### 正确示例

```jsx
<div autoFocus />
<div autoFocus="true" />
<div autoFocus="false" />
<div autoFocus={undefined} />
```

### 参考

- [no-distracting-elements](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-distracting-elements)
