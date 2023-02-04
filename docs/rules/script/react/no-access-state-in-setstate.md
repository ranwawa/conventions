# 必须使用 props、state 和 context 的解构赋值

why?

> 统一写法，统一代码规范.在入口处统一解构赋值,有利于减少代码量,避免后期步骤的函数提取运行增加的性能消耗.请使用解析赋值语法.

## bad

```jsx
const MyComponent = (props) => {
  return <div id={props.id} />;
};

const Foo = class extends React.PureComponent {
  render() {
    return <div>{this.context.foo}</div>;
  }
};
```

## good

```jsx
const MyComponent = ({ id }) => {
  return <div id={id} />;
};

const Foo = class extends React.PureComponent {
  render() {
    const { title } = this.context;
    return <div>{title}</div>;
  }
};
```

## 参考:

- [no-access-state-in-setstate](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-access-state-in-setstate)
