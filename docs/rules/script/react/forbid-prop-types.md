# forbid-prop-types

防止 React 组件定义中缺少 displayName

### 为什么?

displayName 允许你命名你的组件。React 在调试消息时使用此名称。

### 错误示例

```jsx
var Hello = createReactClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});

const Hello = React.memo(({ a }) => {
  return <>{a}</>;
});

export default ({ a }) => {
  return <>{a}</>;
};
```

### 正确示例

```jsx
var Hello = createReactClass({
  displayName: "Hello",
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});

const Hello = React.memo(function Hello({ a }) {
  return <>{a}</>;
});
```

### 参考

- [forbid-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/forbid-prop-types)
