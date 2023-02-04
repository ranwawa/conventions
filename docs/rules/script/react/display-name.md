# 类的实例方法中必须使用 this

## Why?

> 类的实例方法中必须使用 this,如果没有使用到 this,可考虑将方法抽离成公共函数或者写成类的静态方法.以下方法除外

```shell
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate',
```

## bad

```jsx
class Comp extends React.Component {
  start() {
    console.log("comp");
  }
}
```

## good

```jsx
class Comp extends React.Component {
  static start() {
    console.log("comp");
  }
}
```

## 参考:

- [display-name](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/display-name)
