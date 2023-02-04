# 防止 React 组件定义中缺少 displayName

## Why?

> displayName 允许你命名你的组件。React 在调试消息时使用此名称。

## bad

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

## good

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

## 参考:

- [forbid-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/forbid-prop-types)
