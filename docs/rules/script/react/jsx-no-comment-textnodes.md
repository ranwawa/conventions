# 必须在.jsx/.tsx 文件中编写 jsx 语法

why?

> 正常情况下编译器只会对.jsx/.tsx 后缀的文件应用 jsx 编译,如果把 jsx 内容写到.js/.ts 文件中,不仅可能会编译失败,也会降低可维护性.请把包含 jsx 语法的文件后缀修改成.jsx 或.tsx

## bad

```jsx
// MyComponent.js
function MyComponent() {
  return <div />;
}
```

## good

```jsx
// MyComponent.jsx
function MyComponent() {
  return <div />;
}
```

## 参考:

- [jsx-no-comment-textnodes](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-comment-textnodes)
