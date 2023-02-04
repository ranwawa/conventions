# 防止呈现有问题的泄漏值

why?

> 此规则旨在防止呈现危险的泄漏值，因为它们可能导致意外值到达最终 DOM 甚至使您的渲染方法崩溃
> bad

```jsx
const Component = ({ count, title }) => {
  return <div>{count && title}</div>;
};
```

## good

```jsx
const Component = ({ elements }) => {
  return <div>{elements}</div>;
};
```

## 参考:

- [alt-text](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/alt-text)
