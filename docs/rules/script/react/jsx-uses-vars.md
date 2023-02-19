# jsx-uses-vars

防止 React 被错误地标记为未使用

### 错误示例

```jsx
var React = require("react");
// nothing to do with React

/** @jsx Foo */
var React = require("react");
var Hello = <div>Hello {this.props.name}</div>;
```

### 正确示例

```jsx
var React = require("react");
var Hello = <div>Hello {this.props.name}</div>;

/** @jsx Foo */
var Foo = require("foo");
var Hello = <div>Hello {this.props.name}</div>;
```

### 参考

- [jsx-uses-vars](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-uses-vars)
