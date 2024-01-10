# react/jsx-no-comment-textnodes

必须使用花括号注释

### 为什么

防止注释字符串（例如以`//`或`/*`开头的）被误注入为JSX语句中的文本节点。

### 建议

将注释放在花括号中。

### 错误示例

```tsx
import React from 'react';

const Hello = () => <div>// 空的div</div>;

export default Hello;
```

### 正确示例

```tsx
import React from 'react';

const Hello = () => <div>{/*空的div*/}</div>;

export default Hello;
```

### 参考

- [react/jsx-no-comment-textnodes](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md)
