# 强制布尔 props 命名一致

why?

> 为统一代码规范，允许您为需要布尔值的 props 强制执行一致的命名模式
> bad

```jsx
var Hello = createReactClass({
  propTypes: {
    enabled: PropTypes.bool
  },
  render: function() { return <div />; };
});
```

## good

```jsx
var Hello = createReactClass({
  propTypes: {
    isEnabled: PropTypes.bool
  },
  render: function() { return <div />; };
});
```

## 参考:

- [no-typos](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-typos)
