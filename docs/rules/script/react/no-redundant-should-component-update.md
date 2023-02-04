# 强制所有 defaultProps 有一个对应的非必需 PropType

why?

> 该规则旨在确保每个 defaultProp 都有非必需的 PropType 声明。

## bad

```jsx
function MyStatelessComponent({ foo, bar }) {
  return (
    <div>
      {foo}
      {bar}
    </div>
  );
}

MyStatelessComponent.propTypes = {
  foo: React.PropTypes.string.isRequired,
  bar: React.PropTypes.string,
};

MyStatelessComponent.defaultProps = {
  foo: "foo",
};
```

```jsx
var Greeting = React.createClass({
  render: function () {
    return (
      <div>
        Hello {this.props.foo} {this.props.bar}
      </div>
    );
  },

  propTypes: {
    foo: React.PropTypes.string,
    bar: React.PropTypes.string,
  },

  getDefaultProps: function () {
    return {
      baz: "baz",
    };
  },
});
```

## good

```jsx
function MyStatelessComponent({ foo, bar }) {
  return (
    <div>
      {foo}
      {bar}
    </div>
  );
}

MyStatelessComponent.propTypes = {
  foo: React.PropTypes.string,
  bar: React.PropTypes.string.isRequired,
};
```

```jsx
function MyStatelessComponent({ foo, bar }) {
  return (
    <div>
      {foo}
      {bar}
    </div>
  );
}

MyStatelessComponent.propTypes = {
  foo: React.PropTypes.string.isRequired,
  bar: React.PropTypes.string,
};

MyStatelessComponent.defaultProps = {
  bar: "some default",
};
```

## 参考:

- [no-redundant-should-component-update](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-redundant-should-component-update)
