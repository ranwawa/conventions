# react/style-prop-object

必须将样式属性值设置为对象

### 为什么

样式属性`style`的值必须是一个对象或者一个对象变量。

### 建议

将样式属性值设置为对象或者对象变量。

### 错误示例

```tsx
import React from 'react';

//                              style的值没有使用对象
const Hello = () => <div style={'color: red'} />;

export default Hello;
```

### 正确示例

```tsx
import React from 'react';

const Hello = () => <div style={{ color: 'red' }} />;

export default Hello;
```

### 参考

- [react/style-prop-object](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md)
