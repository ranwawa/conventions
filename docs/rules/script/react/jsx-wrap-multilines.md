# react/jsx-wrap-multilines

必须在多行JSX周围添加括号

### 为什么

在多行JSX周围添加括号可以提高代码的可读性和便利性。

### 建议

在多行JSX周围添加括号，括号单独放一行。

### 错误示例

```tsx
import React from 'react';

//                  div外面没有括号
const Hello = () => <div>
    <p>Hello ranwawa</p>
</div>;

export default Hello;
```

### 正确示例

```tsx
import React from 'react';

const Hello = () => (
  <div>
    <p>Hello ranwawa</p>
  </div>
);

export default Hello;
```

### 参考

- [react/jsx-wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)
