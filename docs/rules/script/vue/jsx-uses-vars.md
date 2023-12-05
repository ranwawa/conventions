# vue/jsx-uses-vars

防止在JSX中使用的变量被标记为未使用

### 为什么

自从0.17.0版本开始，ESLint的`no-unused-vars`规则无法检测到在JSX中使用的变量。这条规则可以找到在JSX中使用的变量，并将它们标记为已使用。

### 建议

开启这条规则，可以避免在JSX中使用的变量被错误地标记为未使用。

### 错误示例

```jsx
import HelloWorld from './moduleA';

export default {
  render() {
    return <HelloWorld msg="zhangshan" />;
  }
};
```

### 正确示例

开启这条规则后，`HelloWorld`会被标记为已使用，`no-unused-vars`规则不会报告问题。

### 参考

- [vue/jsx-uses-vars](https://eslint.vuejs.org/rules/jsx-uses-vars.html)
