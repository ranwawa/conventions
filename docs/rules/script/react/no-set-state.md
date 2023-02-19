# no-set-state

防止每个文件定义多个组件

why?

每个文件只声明一个组件可以提高组件的可读性和可重用性

### 错误示例

```jsx
var Hello = createReactClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});

var HelloJohn = createReactClass({
  render: function () {
    return <Hello name="John" />;
  },
});
```

### 正确示例

```jsx
var Hello = require("./components/Hello");

var HelloJohn = createReactClass({
  render: function () {
    return <Hello name="John" />;
  },
});
```

### 参考

- [no-set-state](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-set-state)
