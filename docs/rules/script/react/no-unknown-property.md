# no-unknown-property

防止使用字符串引用

why?

目前，React 支持两种方式来引用组件。第一种方式，提供一个字符串标识符，现在在官方文档中被认为是遗留的。文档现在更喜欢第二种方法——通过 this 在引用回调中设置对象的属性来引用组件
> bad

```jsx
var Hello = createReactClass({
  render: function () {
    return <div ref="hello">Hello, world.</div>;
  },
});

var Hello = createReactClass({
  componentDidMount: function () {
    var component = this.refs.hello;
    // ...do something with component
  },
  render: function () {
    return <div ref="hello">Hello, world.</div>;
  },
});
```

### 正确示例

```jsx
var Hello = createReactClass({
  componentDidMount: function () {
    var component = this.hello;
    // ...do something with component
  },
  render() {
    return (
      <div
        ref={(c) => {
          this.hello = c;
        }}
      >
        Hello, world.
      </div>
    );
  },
});
```

### 参考

- [no-unknown-property](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-unknown-property)
