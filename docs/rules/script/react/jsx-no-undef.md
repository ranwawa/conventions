# 防止在 jsx 中使用字符串

## Why?

> 强制保持一致性，减少语法突出显示问题

## bad

```jsx
var Hello = <div>test</div>;
```

## good

```jsx
var Hello = <div>{"test"}</div>;
```

## 参考:

- [jsx-no-undef](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-undef)
