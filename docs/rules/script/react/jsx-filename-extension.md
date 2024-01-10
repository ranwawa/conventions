# react/jsx-filename-extension

必须使用jsx/tsx文件扩展名

### 为什么

js,ts也可以包含jsx语法，但是使用.

但使用jsx/tsx可以更直观的看到文件是jsx文件，并且可以避免一些不必要的错误。

### 建议

使用.jsx/.tsx作为包含JSX的文件的扩展名。

### 错误示例

```jsx
//               后缀名不是jsx
// filename: foo.js
function Foo() {
  return <div />;
}
```

### 正确示例

```jsx
// filename: foo.jsx
function Foo() {
  return <div />;
}
```

### 参考

- [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)
