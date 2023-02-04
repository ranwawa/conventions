# 防止使用 UNSAFE\_方法

why?

> 某些遗留的生命周期方法在异步 React 应用程序中使用是不安全的，并且在严格模式下会导致警告。这些也恰好是在 React 社区中引起最大混乱的生命周期

## bad

```jsx
class Foo extends React.Component {
  UNSAFE_componentWillMount() {}
  UNSAFE_componentWillReceiveProps() {}
  UNSAFE_componentWillUpdate() {}
}
```

## good

```jsx
class Foo extends Bar {
  UNSAFE_componentWillMount() {}
  UNSAFE_componentWillReceiveProps() {}
  UNSAFE_componentWillUpdate() {}
}
```

## 参考:

- [jsx-fragments](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-fragments)
