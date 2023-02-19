# jsx-curly-newline

强制执行 React 片段的简写或标准形式

why?

为了简写语法,默认是 syntax 模式

### 错误示例

```jsx
<React.Fragment>
  <Foo />
</React.Fragment>
```

### 正确示例

```jsx
<><Foo /></>

<React.Fragment key="key"><Foo /></React.Fragment>
```

### 参考

- [jsx-curly-newline](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-curly-newline)
