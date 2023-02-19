# no-access-state-in-setstate

no-access-state-in-setstate

必须在 setState 的回调中使用 state

why?

如果直接在 setState 中使用 state,在两个更新动作同时执行时可能无法拿到最新值从而引起 bug,所以必须在回调中获取之前的 state 状态值

### 错误示例

```jsx
function increment() {
  this.setState({ value: this.state.value + 1 });
}
```

### 正确示例

```jsx
function increment() {
  this.setState((prevState) =({ value: prevState.value + 1 }));
}
```

## 参考

- [no-access-state-in-setstate](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md)
