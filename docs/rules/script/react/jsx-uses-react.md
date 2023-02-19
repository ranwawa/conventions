# jsx-uses-react

防止 jsx 中使用的变量被错误地标记为未使用

### 错误示例

```jsx
var Hello = require("./Hello");
```

### 正确示例

```jsx
var Hello = require("./Hello");
<Hello name="John" />;
```

### 参考

- [jsx-uses-react](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-uses-react)
