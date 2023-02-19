# jsx-max-depth

防止 this 在无状态功能组件中使用

why?

使用无状态功能组件 (SFC) 时，props/context 的访问方式与类组件或 create-react-class 格式不同。props 和 context 都作为单独的参数传递给组件，this 指向的不是当前组件

### 错误示例

```jsx
function Foo(props) {
  return <div>{this.props.bar}</div>;
}
```

### 正确示例

```jsx
function Foo(props) {
  return <div>{props.bar}</div>;
}
```

### 参考

- [jsx-max-depth](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-max-depth)
