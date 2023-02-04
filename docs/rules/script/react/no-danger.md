# 防止 react 被错误地标记为未使用

## bad

```jsx
var React = require("react");
// nothing to do with React

/** @jsx Foo */
var React = require("react");
var Hello = <div>Hello {this.props.name}</div>;
```

## good

```jsx
var React = require("react");
var Hello = <div>Hello {this.props.name}</div>;

/** @jsx Foo */
var Foo = require("foo");
var Hello = <div>Hello {this.props.name}</div>;
```

## 参考:

- [no-danger](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-danger)
