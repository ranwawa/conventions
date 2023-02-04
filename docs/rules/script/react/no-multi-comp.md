# 防止使用 isMounted

why?

> isMounted 是一种反模式，在使用 ES6 类时不可用，并且正在被正式弃用

## bad

```jsx
var Hello = createReactClass({
  handleClick: function () {
    setTimeout(function () {
      if (this.isMounted()) {
        return;
      }
    });
  },
  render: function () {
    return <div onClick={this.handleClick.bind(this)}>Hello</div>;
  },
});
```

## good

```jsx
var Hello = createReactClass({
  render: function () {
    return <div onClick={this.props.handleClick}>Hello</div>;
  },
});
```

## 参考:

- [no-multi-comp](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-multi-comp)
