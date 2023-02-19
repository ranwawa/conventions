# jsx-no-undef

防止在 jsx 中使用字符串

### 为什么?

强制保持一致性，减少语法突出显示问题

### 错误示例

```jsx
var Hello = <div>test</div>;
```

### 正确示例

```jsx
var Hello = <div>{"test"}</div>;
```

### 参考

- [jsx-no-undef](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-undef)
