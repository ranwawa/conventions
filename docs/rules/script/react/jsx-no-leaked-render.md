# jsx-no-leaked-render

在 iframe 元素上强制执行 sandbox 属性

why?

为 iframe 中的内容启用了一组额外的限制
> bad

```jsx
var React = require("react");

var Frame = () => (
  <div>
    <iframe></iframe>
    {React.createElement("iframe")}
  </div>
);
```

### 正确示例

```jsx
var React = require("react");

var Frame = <iframe sandbox="allow-popups" />;
var Frame = () => (
  <div>
    <iframe sandbox="allow-popups"></iframe>
    {React.createElement("iframe", { sandbox: "allow-popups" })}
  </div>
);
```

### 参考

- [jsx-no-leaked-render](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-leaked-render)
