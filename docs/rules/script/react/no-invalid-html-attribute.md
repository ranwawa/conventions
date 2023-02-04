# 生命周期方法应该是原型上的方法，而不是类字段

why?

> 生命周期方法不需要使用箭头函数。这使得事情更难测试，从概念上讲性能较低（尽管在实践中，性能不会受到影响，因为大多数引擎都会有效地优化），并且可能会破坏热重载模式
> bad

```jsx
class Hello extends React.Component {
  render = () => {
    return <div />;
  };
}

var AnotherHello = createReactClass({
  render: () => {
    return <div />;
  },
});
```

## good

```jsx
class Hello extends React.Component {
  render() {
    return <div />;
  }
}

var AnotherHello = createReactClass({
  render() {
    return <div />;
  },
});
```

## 参考:

- [no-invalid-html-attribute](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-invalid-html-attribute)
