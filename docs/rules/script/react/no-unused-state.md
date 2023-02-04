# 扩展 React.PureComponent 时防止使用 shouldComponentUpdate

why?

> 如果在定义扩展 React.PureComponent 的组件里面写了 shouldComponentUpdate，虽然 shouldComponentUpdate 会生效，但扩展 PureComponent 变得毫无意义

## bad

```jsx
class Foo extends React.PureComponent {
  shouldComponentUpdate() {
    // do check
  }

  render() {
    return <div>Radical!</div>
  }
```

## good

```jsx
class Foo extends React.Component {
  shouldComponentUpdate() {
    // do check
  }

  render() {
    return <div>Radical!</div>;
  }
}
```

## 参考:

- [no-unused-state](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-unused-state)
