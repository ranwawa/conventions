# boolean-prop-naming

防止定义未使用的 state

why?

如果您在状态上定义了一个属性，但它没有在任何地方使用，则会警告您，防止代码冗余。
> bad

```jsx
class MyComponent extends React.Component {
  state = { foo: 0 };
  render() {
    return <SomeComponent />;
  }
}
```

### 正确示例

```jsx
class MyComponent extends React.Component {
  state = { foo: 0 };
  render() {
    return <SomeComponent foo={this.state.foo} />;
  }
}
```

### 参考

- [boolean-prop-naming](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/boolean-prop-naming)
