# rules-of-hooks

防止声明组件类的未使用方法

why?

防止代码冗余
> bad

```jsx
class Foo extends React.Component {
  handleClick() {}
  render() {
    return null;
  }
}
```

### 正确示例

```jsx
class Foo extends React.Component {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  action() {}
  componentDidMount() {
    this.action();
  }
  render() {
    return null;
  }
}
```

### 参考

- [rules-of-hooks](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/rules-of-hooks)
