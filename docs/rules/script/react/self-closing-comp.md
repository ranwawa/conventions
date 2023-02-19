# self-closing-comp

强制 ES5 或 ES6 类在渲染函数中返回值

why?

在组件中编写 render 方法时，很容易忘记返回 JSX 内容。return 如果缺少该语句，此规则将发出警告
> bad

```jsx
var Hello = createReactClass({
  render() {
    <div>Hello</div>;
  },
});

class Hello extends React.Component {
  render() {
    <div>Hello</div>;
  }
}
```

### 正确示例

```jsx
var Hello = createReactClass({
  render() {
    return <div>Hello</div>;
  },
});

class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
```

### 参考

- [self-closing-comp](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/self-closing-comp)
