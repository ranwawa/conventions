# 偏好精确的 proptype 定义

why?

> 推荐选项以确保在编写组件时仅使用精确的 prop 定义。这为 PropTypes 或 Flow 类型推荐了解决方案
> bad

```jsx
type Props = {
  foo: string,
};
function Component(props: Props) {
  return <div />;
}
```

```jsx
class Component extends React.Component {
  render() {
    return <div />;
  }
}
Component.propTypes = {
  foo: PropTypes.string,
};
```

## good

```jsx
type Props = {|
  foo: string,
|};
function Component(props: Props) {
  return <div />;
}
```

```jsx
import exact from "prop-types-exact";
class Component extends React.Component {
  render() {
    return <div />;
  }
}
Component.propTypes = exact({
  foo: PropTypes.string,
});
```

## 参考:

- [no-arrow-function-lifecycle](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-arrow-function-lifecycle)
