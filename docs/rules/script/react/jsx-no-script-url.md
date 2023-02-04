# 强制 props 是只读的

why?

> 强制任何 JSX 属性都没有传播，有利于可维护性
> bad

```jsx
type Props = {
  name: string,
};
class Hello extends React.Component<Props> {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

function Hello(props: { -name: string }) {
  return <div>Hello {props.name}</div>;
}

const Hello = (props: {| name: string |}) => <div>Hello {props.name}</div>;
```

## good

```jsx
type Props = {
  +name: string,
};
class Hello extends React.Component<Props> {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

function Hello(props: { +name: string }) {
  return <div>Hello {props.name}</div>;
}

const Hello = (props: {| +name: string |}) => <div>Hello {props.name}</div>;
```

## 参考:

- [jsx-no-script-url](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-script-url)
