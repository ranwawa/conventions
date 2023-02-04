# 强制执行组件方法顺序

why?

> 在创建 React 组件时，始终遵循相同的方法顺序组织会更方便，以帮助您轻松找到生命周期方法、事件处理程序等

rules

> 1.静态方法和属性 2.生命周期方法：displayName, propTypes, contextTypes, childContextTypes, mixins, statics, defaultProps, constructor, getDefaultProps, getInitialState, state, getChildContext, componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount（按此顺序）。 3.自定义方法
> 4.render 方法

## bad

```jsx
var Hello = createReactClass({
  render: function () {
    return <div>Hello</div>;
  },
  displayName: "Hello",
});
```

## good

```jsx
var Hello = createReactClass({
  displayName: "Hello",
  render: function () {
    return <div>Hello</div>;
  },
});
```

## 参考:

- [jsx-wrap-multilines](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-wrap-multilines)
