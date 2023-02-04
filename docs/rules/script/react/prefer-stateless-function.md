# 为 React 组件强制执行 ES5 或 ES6 类

why?

> 统一规范，是用 es5 还是 es6 的类，es6 类是默认模式
> bad

```jsx
var Hello = createReactClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});
```

## good

```jsx
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

## 参考:

- [prefer-stateless-function](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/prefer-stateless-function)
