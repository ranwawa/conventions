# jsx-first-prop-new-line

防止多行 JSX 周围缺少括号

why?

将多行 JSX 包裹在括号中可以提高可读性和/或便利性

parens 使用 or 时，以下模式被视为警告 parens-new-line：

```jsx
var Hello = createReactClass({
  render: function () {
    return (
      <div>
        <p>Hello {this.props.name}</p>
      </div>
    );
  },
});

var Hello = createReactClass({
  render: function () {
    return (
      <div>
        <p>Hello {this.props.name}</p>
      </div>
    );
  },
});
```

以下模式不被视为警告：

```jsx
var singleLineJSX = <p>Hello</p>;

var Hello = createReactClass({
  render: function () {
    return (
      <div>
        <p>Hello {this.props.name}</p>
      </div>
    );
  },
});
```

declaration

以下模式在配置时被视为警告{declaration: "parens"}。

```jsx
var hello = (
  <div>
    <p>Hello</p>
  </div>
);
```

以下模式在配置时不被视为警告{declaration: "parens"}

```jsx
var hello = (
  <div>
    <p>Hello</p>
  </div>
);

var hello = (
  <div>
    <p>Hello</p>
  </div>
);
```

以下模式在配置时被视为警告{declaration: "parens-new-line"}

```jsx
var hello = (
  <div>
    <p>Hello</p>
  </div>
);

var hello = (
  <div>
    <p>Hello</p>
  </div>
);
```

以下模式在配置时不被视为警告{declaration: "parens-new-line"}。

```jsx
var hello = (
  <div>
    <p>Hello</p>
  </div>
);
```

### 参考

- [jsx-first-prop-new-line](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-first-prop-new-line)
