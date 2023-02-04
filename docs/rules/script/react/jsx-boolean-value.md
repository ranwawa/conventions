# 禁止 DOM 节点上的某些 props

## Why?

> 使代码更规范，例如 forbid 的是 style 的话就禁止使用了内联样式

## bad

```jsx
// [1, { "forbid": ["id"] }]
<div id="Joe" />
```

```jsx
// [1, { "forbid": ["style"] }]
<div style={{ color: "red" }} />
```

## good

```jsx
// [1, { "forbid": ["id"] }]
<Hello id="foo" />
```

```jsx
// [1, { "forbid": ["id"] }]
<Hello id={{ color: "red" }} />
```

## 参考:

- [jsx-boolean-value](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-boolean-value)
