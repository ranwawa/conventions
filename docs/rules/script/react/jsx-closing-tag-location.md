# 验证 jsx 中闭合括号的位置

## Why?

> 使代码更规范，此规则检查所有 JSX 多行元素并验证右括号的位置。默认情况下，这个必须与开始标签对齐。

## bad

```jsx
<Hello lastName="Smith" firstName="John" />;

<Hello lastName="Smith" firstName="John" />;
```

## good

```jsx
<Hello firstName="John" lastName="Smith" />;

<Hello firstName="John" lastName="Smith" />;
```

## 参考:

- [jsx-closing-tag-location](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-closing-tag-location)
