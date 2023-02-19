# no-string-refs

防止使用 setState

why?

当使用将应用程序状态与 UI 组件（例如 Flux）分离的架构时，可能需要禁止使用本地组件状态。此规则在只读应用程序（不使用表单）中特别有用，因为在这种情况下本地组件状态很少需要。

### 错误示例

```jsx
var Hello = createReactClass({
  getInitialState: function () {
    return {
      name: this.props.name,
    };
  },
  handleClick: function () {
    this.setState({
      name: this.props.name.toUpperCase(),
    });
  },
  render: function () {
    return (
      <div onClick={this.handleClick.bind(this)}>Hello {this.state.name}</div>
    );
  },
});
```

### 正确示例

```jsx
var Hello = createReactClass({
  render: function () {
    return <div onClick={this.props.handleClick}>Hello {this.props.name}</div>;
  },
});
```

### 参考

- [no-string-refs](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-string-refs)
