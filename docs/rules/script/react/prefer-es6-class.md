# react/prefer-es6-class

推荐使用ES6类来创建React组件

### 为什么

React提供了两种方式来创建传统组件：使用ES5的`create-react-class`模块或新的ES6类系统。

### 建议

推荐使用ES6类来创建React组件。

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
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

### 参考

- [react/prefer-es6-class](https://eslint.org/docs/rules/react/prefer-es6-class)
