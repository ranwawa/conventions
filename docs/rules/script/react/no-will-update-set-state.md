# react/no-will-update-set-state

禁止在componentWillUpdate中使用setState

### 为什么

在componentWillUpdate步骤中更新状态可能会导致组件状态不确定，有可能引起死循环。

### 建议

不要使用componentWillUpdate钩子

### 错误示例

```tsx
const Hello = createReactClass({
  componentWillUpdate: function () {
    this.setState({
      name: 'ranwawa'
    });
  },
  render: function () {
    return <div>Hello {this.state.name}</div>;
  }
});
```

### 正确示例

```tsx
const Hello = createReactClass({
  componentWillUpdate: function () {
    this.props.prepareHandler();
  },
  render: function () {
    return <div>Hello {this.props.name}</div>;
  }
});
```

### 参考

- [react/no-will-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md)
