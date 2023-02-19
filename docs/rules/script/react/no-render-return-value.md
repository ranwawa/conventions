# no-render-return-value

防止注释作为文本节点插入

why?

此规则防止注释字符串（例如以 or 开头/\*）作为文本节点意外注入 JSX 语句中。

### 错误示例

```jsx
var Hello = createReactClass({
  render: function () {
    return <div>// empty div</div>;
  },
});

var Hello = createReactClass({
  render: function () {
    return <div>/* empty div */</div>;
  },
});
```

### 正确示例

```jsx
var Hello = createReactClass({
  displayName: 'Hello',
  render: function() {
    return <div>{/* empty div */}</div>;
  }
});

var Hello = createReactClass({
  displayName: 'Hello',
  render: function() {
    return <div /* empty div */></div>;
  }
});

var Hello = createReactClass({
  displayName: 'Hello',
  render: function() {
    return <div className={'foo' /* temp class */}</div>;
  }
});
```

### 参考

- [no-render-return-value](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-render-return-value)
