# 禁止调用未显示声明的 props 属性

## Why?

> 避免运行时错误,以及更好的开发时错误提示

## bad

```jsx
function Hello({ name }) {
  return <div>Hello {name}</div>;
}
```

## good

```jsx
interface Props {
  age: number;
}
function Hello({ name }: Props) {
  return <div>Hello {name}</div>;
}
```

## 参考

- [](https://stylelint.io/user-guide/rules/list/)
