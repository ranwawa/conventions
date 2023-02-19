# jsx-curly-brace-presence

防止常见的大小写错误

why?

确保在声明静态类属性和生命周期方法时没有出现大小写错误
> bad

```jsx
class MyComponent extends React.Component {
  static PropTypes = {};
}
```

### 正确示例

```jsx
class MyComponent extends React.Component {
  static propTypes = {};
}
```

### 参考

- [jsx-curly-brace-presence](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-curly-brace-presence)
