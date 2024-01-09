# react/jsx-first-prop-new-line

必须把第一个属性在新行

### 为什么

统一风格,有利于阅读和维护.

### 建议

当一个标签包含多个属性并且超过了80个字符宽度时,每个属性应该单独放一行.

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

const Hello = () => (
  <div
    data-name="ranwawa"
    data-age={28}
    data-address="beijing"
    data-is-dog={false}
  />
);

export default Hello;
```

### 参考

- [react/jsx-first-prop-new-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md)
