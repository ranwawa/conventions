# react/self-closing-comp

必须使用自闭合标签

### 为什么

无子元素的组件可以自我关闭，以避免不必要的额外关闭标签。统一风格可以提升代码的整体可读性及可维护性

### 建议

无子元素的组件应使用自我关闭的方式。

### 错误示例

```tsx
import React from 'react';

//                  这里的标签应该要自闭合
const Hello = () => <div></div>;

export default Hello;
```

### 正确示例

```tsx
import React from 'react';

const Hello = () => <div />;

export default Hello;
```

### 参考

- [react/self-closing-comp](https://eslint.org/docs/rules/react/self-closing-comp)
