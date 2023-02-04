# 防止定义未使用的 propTypes

why?

> 避免代码冗余浪费性能

## bad

```jsx
class Hello extends React.Component {
  render() {
    return <div>Hello Bob</div>;
  }
}

Hello.propTypes = {
  name: PropTypes.string,
};

type Props = {
  firstname: string,
  middlename: string, // middlename is never used by the Hello component
  lastname: string,
};

class Hello extends React.Component<Props> {
  render() {
    return (
      <div>
        Hello {this.props.firstname} {this.props.lastname}
      </div>
    );
  }
}
```

## good

```jsx
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

Hello.propTypes = {
  name: PropTypes.string,
};
```

## 参考:

- [style-prop-object](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/style-prop-object)
