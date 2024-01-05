# react/no-string-refs

禁止使用字符串引用

### 为什么

React支持两种方式引用组件，其中一种是提供字符串标识符。文档现在更推荐第二种方法 -- 通过在引用回调中设置`this`对象的属性来引用组件。

### 建议

使用回调函数形式的refs，而不是字符串形式的refs。

### 错误示例

```tsx
const Hello = createReactClass({
  render: function () {
    return <div ref="ranwawa">Hello, world.</div>;
  }
});
```

### 正确示例

```tsx
const Hello = createReactClass({
  componentDidMount: function () {
    const component = this.ranwawa;
    // ...do something with component
  },
  render() {
    return (
      <div
        ref={(c) => {
          this.ranwawa = c;
        }}
      >
        Hello, world.
      </div>
    );
  }
});
```

### 参考

- [react/no-string-refs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)
