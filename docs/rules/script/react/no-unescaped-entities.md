# react/no-unescaped-entities

禁止在标记中出现未转义的HTML实体

### 为什么

可能将JSX转义字符误注入为JSX语句中的文本节点。

### 建议

如果需要在标签体中使用这些特殊字符,需要对它们进行转义。或者用字符串进行表示

### 错误示例

```tsx
import  React from 'react';

//                         jsx中出现了未转义的HTML实体
const Hello = () => (<div> > </div>);

export default Hello
```

### 正确示例

```tsx
import React from 'react';

const Hello = () => <div> &gt;{'>'} </div>;

export default Hello;
```

### 参考

- [react/no-unescaped-entities](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md)
