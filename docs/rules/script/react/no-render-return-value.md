# react/no-render-return-value

禁止使用ReactDOM.render()的返回值

### 为什么

ReactDOM.render()当前返回对根ReactComponent实例的引用。React的未来版本在某些情况下可能会异步渲染组件,升级后项目就可能会挂掉。

### 建议

不要使用ReactDOM.render()的返回值，而是使用回调引用。

### 错误示例

```tsx
import React from 'react';
import ReactDOM from 'react-dom';

const foo = ReactDOM.render(<div />, document.body);

console.log(foo);
```

### 正确示例

```tsx
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div />, document.body, console);
```

### 参考

- [react/no-render-return-value](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md)
