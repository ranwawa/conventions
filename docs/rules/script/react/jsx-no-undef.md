# react/jsx-no-undef

禁止在JSX中使用未声明的组件

### 为什么

主还用说嘛,肯定报错

### 建议

在使用组件前，确保已经正确地引入了该组件。

### 错误示例

```tsx
<Hello name="zhangshan" />
```

### 正确示例

```tsx
const Hello = require('./moduleA');

<Hello name="zhangshan" />;
```

### 参考

- [react/jsx-no-undef](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md)
