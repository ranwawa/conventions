# react/jsx-equals-spacing

JSX属性中的等号两侧必须没有空格

### 为什么

统一风格,有利于阅读和维护.

### 建议

在JSX属性中的等号两侧不要添加空格。
可以通过prettier进行自动格式化

### 错误示例

```tsx
import React from 'react';

const Hello = () => (
  // data-name没有单独起一行
  <div data-name="ranwawa"
    data-age={28}
    data-address="beijing"
    data-is-dog={false}
  />
);

export default Hello;
```

### 正确示例

```tsx
import React from 'react';

const Hello = () => <div data-name="ranwawa" />;

export default Hello;
```

### 参考

- [react/jsx-equals-spacing](https://eslint.org/docs/rules/react/jsx-equals-spacing)
