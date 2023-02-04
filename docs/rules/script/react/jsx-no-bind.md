# 在 jsx 中限制单行上的 prop 的数量

## Why?

> 检查所有 jsx 元素并验证每行的 prop 数量不超过允许的最大值。如果 prop 的开始和前一个道具的结束之间有换行符，则认为 prop 在新行中。，此规则是关闭的，并且在默认情况下，一行上的最多的 prop 是 1.

## bad

```jsx
<Hello lastName="Smith" firstName="John" />;

<Hello
  foo={{
    bar,
  }}
  baz
/>;
```

## good

```jsx
<Hello firstName="John" lastName="Smith" />;

<Hello {...this.props} firstName="John" lastName="Smith" />;
```

## 参考:

- [jsx-no-bind](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-bind)
