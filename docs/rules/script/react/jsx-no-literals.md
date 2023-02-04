# 防止 jsx 中的重复属性

## Why?

> 创建具有重复 props 的 JSX 元素可能会导致应用程序出现意外行为

## bad

```jsx
<Hello name="John" name="John" />
```

## good

```jsx
<Hello firstname="John" lastname="Doe" />
```

## 参考:

- [jsx-no-literals](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-literals)
