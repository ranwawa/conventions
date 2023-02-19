# function-component-definition

必须使用箭头函数声明函数式组件

why?

统一风格.避免函数声明,函数表达式,箭头函数混用导致的混乱

### 错误示例

```jsx
// 函数表达式
const Component = function (props) {
  return <div />;
};

// 函数声明
const Component = function name(props) {
  return <div />;
};
```

### 正确示例

```jsx
const Component = (props) => {
  return <div />;
};
```

### 参考

- [react/function-component-definition](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md)
