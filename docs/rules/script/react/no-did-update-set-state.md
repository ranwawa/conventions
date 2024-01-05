# react/no-did-update-set-state

禁止在componentDidUpdate中使用setState

### 为什么

在组件更新后更新状态会触发第二次`render()`调用，可能导致属性/布局抖动。甚至是死循环

### 建议

如果非要在`componentDidUpdate`中更新状态，请使用`props`的回调函数进行状态更新。

### 错误示例

```tsx
const Hello = createReactClass({
  componentDidUpdate: function () {
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
  componentDidUpdate: function () {
    this.props.onUpdate();
  },
  render: function () {
    return <div>Hello {this.props.name}</div>;
  }
});
```

### 参考

- [react/no-did-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)
