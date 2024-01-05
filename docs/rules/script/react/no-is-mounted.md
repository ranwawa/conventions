# react/no-is-mounted

禁止使用isMounted

### 为什么

isMounted是一个反模式，不适用于ES6类

### 建议

不要在组件中使用isMounted方法。

### 错误示例

```tsx
const Hello = createReactClass({
  handleClick: function () {
    setTimeout(function () {
      if (this.isMounted()) {
        return;
      }
    });
  },
  render: function () {
    return <div onClick={this.handleClick.bind(this)}>Hello</div>;
  }
});
```

### 正确示例

```tsx
const Hello = createReactClass({
  render: function () {
    return <div onClick={this.props.handleClick}>Hello</div>;
  }
});
```

### 参考

- [react/no-is-mounted](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)
