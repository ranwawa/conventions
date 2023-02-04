# 必须给可选的 props 属性设置默认值

why?

> 如果可选的属性值没有默认值,代码中直接调用可能会抛出未定义的异常.这样设置会在去时进行默认值赋值,有利于提高代码稳定性.请通过默认值或者 defaultProp 进行设置,现在通过 ts 可以做到很好的类型检测,这个功能存在意义不大

## bad

```jsx
function MyStatelessComponent({ bar }) {
  return <div>{bar}</div>;
}

MyStatelessComponent.propTypes = {
  bar: PropTypes.string,
};
```

## good

```jsx
function MyStatelessComponent({ bar }) {
  return <div>{bar}</div>;
}

MyStatelessComponent.propTypes = {
  bar: PropTypes.string,
};

MyStatelessComponent.defaultProp = {
  bar: "bar",
};
```

## 参考

- [react/rules/require-default-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md)
