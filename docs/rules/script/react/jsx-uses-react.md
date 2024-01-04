# react/jsx-uses-react

禁止错误地将React标记为未使用

### 为什么

一个JSX文件中,必须要渲染一个JSX组件,要不然引入的React会被认为是未使用。

### 建议

确保在使用JSX的文件中， 要渲染一个JSX组件。

### 错误示例

```tsx
const React = require('react');

// 与React无关
```

### 正确示例

```tsx
var React = require('react');

var Hello = <div>Hello {this.props.name}</div>;
```

### 参考

- [react/jsx-uses-react](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-react.md)
