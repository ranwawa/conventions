# no-unescaped-entities

将样式 prop 值强制为对象或一个对象的变量

why?

避免代码冗余浪费性能

### 错误示例

```jsx
<div style="color: 'red'" />

<div style={true} />

<Hello style={true} />

const styles = true;
<div style={styles} />
```

### 正确示例

```jsx
<div style={{ color: "red" }} />

<Hello style={{ color: "red" }} />

const styles = { color: "red" };
<div style={styles} />
```

### 参考

- [no-unescaped-entities](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-unescaped-entities)
