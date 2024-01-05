# react/prefer-stateless-function

推荐使用纯函数组件

### 为什么

无状态的函数组件比基于类的组件更简单，性能更好。

### 建议

如果组件不包含除`displayName`, `propTypes`, `contextTypes`, `defaultProps`, `render`和无用构造函数以外的方法/属性，没有除`this.props`和`this.context`以外的实例属性，没有扩展`React.PureComponent`，没有在JSX中使用`ref`属性，没有使用装饰器，`render`方法返回的不是JSX，那么建议将其写为纯函数。

### 错误示例

```tsx
const Hello = createReactClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  }
});
```

### 正确示例

```tsx
const Foo = function (props, context) {
  const { location } = context.router;

  return <div>{props.foo}</div>;
};
```

### 参考

- [react/prefer-stateless-function](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)
