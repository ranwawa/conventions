# 使用 jsx 时防止缺少 React

why?

> 使用 JSX 时，a 标签扩展为 React.createElement("a"). 因此，React 变量必须在范围内
> bad

```jsx
var Hello = <div>Hello {this.props.name}</div>;

/** @jsx Foo.bar */
var React = require("react");
var Hello = <div>Hello {this.props.name}</div>;
```

## good

```jsx
import React from "react";
var Hello = <div>Hello {this.props.name}</div>;

var React = require("react");
var Hello = <div>Hello {this.props.name}</div>;

/** @jsx Foo.bar */
var Foo = require("foo");
var Hello = <div>Hello {this.props.name}</div>;
```

## 参考:

- [require-render-return](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/require-render-return)
