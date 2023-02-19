# jsx-sort-props

强制 propTypes 声明按字母排序

### 为什么?

以便以后更容易找到必要的声明

### 错误示例

```jsx
var Component = createReactClass({
  propTypes: {
    z: PropTypes.number,
    a: PropTypes.any,
    b: PropTypes.string
  },
...
});
```

### 正确示例

```jsx
var Component = createReactClass({
  propTypes: {
    a: PropTypes.number,
    b: PropTypes.any,
    c: PropTypes.string
  },
...
});
```

### 参考

- [jsx-sort-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-sort-props)
