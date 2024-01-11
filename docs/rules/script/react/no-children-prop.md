# react/no-children-prop

禁止将children作为props传递

### 为什么

children应该始终作为实际的子元素，而不是作为prop传递。统一风格避免给出不一致的代码。

### 建议

当使用JSX时，children应该嵌套在开头和结尾的标签之间。当不使用JSX时，children应该作为额外的参数传递给`React.createElement`。

### 错误示例

```tsx
import * as React from 'react';

const MyComponent = ({ children }: { children: React.ReactNode }) => (
  // . children出现在了标签属性上
  <div children={children} />
);

export default MyComponent;
```

### 正确示例

```tsx
import * as React from 'react';

const MyComponent = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export default MyComponent;
```

### 参考

- [react/no-children-prop](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md)
