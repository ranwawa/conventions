# jsx-pascal-case

禁止使用在 jsx 中未声明的变量

### 为什么?

此规则有助于定位因拼写错误或缺少组件而导致的潜在引用错误

### 错误示例

```jsx
<Hello name="John" />;
// will ignore Text in the global scope and warn
var Hello = React.createClass({
  render: function () {
    return <Text>Hello</Text>;
  },
});
module.exports = Hello;
```

### 正确示例

```jsx
var Hello = require("./Hello");

<Hello name="John" />;
```

### 参考

- [jsx-pascal-case](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-pascal-case)
