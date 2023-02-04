# 防止使用危险的 jsx 属性

why?

> React 中的危险属性是那些已知其行为是应用程序漏洞的常见来源的属性。属性名称清楚地表明它们是危险的，除非非常小心，否则应避免使用。

## bad

```jsx
var React = require("react");
var Hello = <div dangerouslySetInnerHTML={{ __html: "Hello World" }}></div>;
```

## good

```jsx
var React = require("react");
var Hello = <div>Hello World</div>;
```

## 参考:

- [no-deprecated](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-deprecated)
