# 必须使用箭头函数声明函数式组件

why?

> 统一风格.避免函数声明,函数表达式,箭头函数混用导致的混乱

## bad

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

## good

```jsx
const Component = (props) => {
  return <div />;
};
```

## 参考:

- [react/function-component-definition](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md)
