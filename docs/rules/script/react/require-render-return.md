# react/require-render-return

必须在render函数中返回值

### 为什么

render返回的内容会用来渲染到屏幕上,如果没有返回东西,这个组件就没啥实际意义了

### 建议

在render函数中使用return返回JSX内容。

### 错误示例

```tsx
import React from 'react';

export default class Hello extends React.Component {
  name = 'ranwawa';

  render() {
    // 这里没有使用return语句
    <div>{this.name}</div>;
  }
}
```

### 正确示例

```tsx
import React from 'react';

export default class Hello extends React.Component {
  name = 'ranwawa';

  render() {
    return <div>{this.name}</div>;
  }
}
```

### 参考

- [react/require-render-return](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)
