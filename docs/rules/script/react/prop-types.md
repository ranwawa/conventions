# 强制将无状态 React 组件编写为纯函数

why?

> 无状态功能组件比基于类的组件更简单，react 针对纯函数组件做了更多性能优化.包含以下元素的组件就**不是**纯函数组件

- 使用了 displayName, propTypes, contextTypes, defaultProps, render 以外的类接口,比如生命周期钩子
- 使用了 this.props 和 this.context
- 使用了 ref 特性
- 使用了装饰器
- render 函数返回了 jsx 以外的内容

## bad

```jsx
const Hello = createReactClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});
```

## good

```jsx
const Foo = function (props, context) {
  const { location } = context.router;

  return <div>{props.foo}</div>;
};

class Foo extends React.Component {
  render() {
    if (!this.props.foo) {
      return null;
    }
    return <div>{this.props.foo}</div>;
  }
}
```

## 参考

- [react/prefer-stateless-function](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)
- [medium](https://medium.com/technofunnel/working-with-react-pure-components-166ded26ae48)
