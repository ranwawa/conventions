# react/jsx-indent

必须使用2个空格进行JSX缩进

### 为什么

统一风格,有利于阅读和维护.

### 建议

使用2个空格进行缩进。
可以通过prettier进行自动格式化

### 错误示例

```tsx
import React from 'react';

const Hello = () => (
    // div前面使用了4个空格
    <div
    data-name="ranwawa"
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

- [react/jsx-indent](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md)
