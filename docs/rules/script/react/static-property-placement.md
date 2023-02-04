# 强制状态初始化样式

why?

> 为统一代码样式规范，此规则在 jsx 大括号表达式的大括号内强制执行一致的换行符
> bad

```jsx
class Foo extends React.Component {
  state = { bar: 0 };
  render() {
    return <div>Foo</div>;
  }
}
```

## good

```jsx
class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bar: 0 };
  }
  render() {
    return <div>Foo</div>;
  }
}
```

## 参考:

- [static-property-placement](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/static-property-placement)
