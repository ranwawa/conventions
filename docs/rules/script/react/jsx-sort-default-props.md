# 强制 props 按字母排序

## Why?

> 以便以后更容易找到必要的 props

## bad

```jsx
<Hello lastName="Smith" firstName="John" />
```

## good

```jsx
<Hello firstName="John" lastName="Smith" />;
<Hello tel={5555555} {...this.props} firstName="John" lastName="Smith" />;
```

## 参考:

- [jsx-sort-default-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-sort-default-props)
