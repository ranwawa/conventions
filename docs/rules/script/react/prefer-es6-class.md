# 防止使用未知的 DOM 属性

why?

> 在 JSX 中，所有 DOM 属性和属性都应该采用驼峰式格式，以与标准 JavaScript 样式保持一致
> bad

```jsx
var React = require("react");

var Hello = <div class="hello">Hello World</div>;
```

## good

```jsx
var React = require("react");

var Hello = <div className="hello">Hello World</div>;
```

## 参考:

- [prefer-es6-class](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/prefer-es6-class)
