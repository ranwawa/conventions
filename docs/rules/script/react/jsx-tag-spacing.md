# react/jsx-tag-spacing

禁止在JSX标签周围留空白

### 为什么

以保持代码的整洁和一致性,可以提升代码的维护性和易读性。

### 建议

在JSX标签的开放和关闭之间，以及自闭合元素的开放和关闭之间，干掉空格。

要以使用prettier来格式化代码时。

### 错误示例

```tsx
import React from 'react';

//                      标签周围有空格
const Hello = () => <div > . ranwawa</div>;

export default Hello;
```

### 正确示例


```tsx
import React from 'react';

const Hello = () => <div>ranwawa</div>;

export default Hello;
```



### 参考

- [react/jsx-tag-spacing](https://eslint.org/docs/rules/react/jsx-tag-spacing)
