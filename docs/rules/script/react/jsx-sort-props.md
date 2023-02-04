# 强制 propTypes 声明按字母排序

## Why?

> 以便以后更容易找到必要的声明

## bad

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

## good

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

## 参考:

- [jsx-sort-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-sort-props)
