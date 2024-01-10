# react/no-danger-with-children

禁止DOM元素同时使用children和dangerouslySetInnerHTML

### 为什么

children和dangerouslySetInnerHTML同时使用,只会有一个生效,这么写只会给阅读的人带来困扰

### 建议

只使用children

### 错误示例

```tsx
import React from 'react';

React.createElement(
  'div',
  { dangerouslySetInnerHTML: { __html: 'HTML' } },
  'ranwawa'
);
```

### 正确示例

```tsx
import React from 'react';

React.createElement('div', {}, 'ranwawa');
```

### 参考

- [react/no-danger-with-children](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md)
