# react/jsx-uses-vars

禁止未使用的变量

### 为什么

`eslint`的`no-unused-vars`规则无法检测在JSX中使用的变量。这条规则将找到在JSX中使用的变量并标记为已使用。

### 建议

删除未使用的变量

### 错误示例

```js
var Hello = require('./moduleA');
```

### 正确示例

```jsx
var Hello = require('./moduleA');

<Hello name="zhangshan" />;
```

### 参考

- [react/jsx-uses-vars](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md)
