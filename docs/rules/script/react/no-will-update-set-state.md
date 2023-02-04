# 防止在 componentDidUpdate 中使用 setState

why?

> 在组件挂载后更新状态将触发第二次 render()调用，并可能导致属性/布局抖动

## bad

```jsx
var Hello = createReactClass({
  componentDidUpdate: function () {
    this.setState({
      name: this.props.name.toUpperCase(),
    });
  },
  render: function () {
    return <div>Hello {this.state.name}</div>;
  },
});
```

## good

```jsx
var Hello = createReactClass({
  componentDidUpdate: function () {
    this.onUpdate(function callback(newName) {
      this.setState({
        name: newName,
      });
    });
  },
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});
```

## 参考:

- [no-will-update-set-state](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-will-update-set-state)
