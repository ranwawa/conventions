# react/prop-types

禁止出现未定义过类型的属性

### 为什么

为组件props定义类型可以通过验证接收的数据来提高组件的可重用性。其他开发者在使用错误的数据类型重用组件时，可以发出警告。

### 建议

为每个props定义类型，可以使用PropTypes或TypeScript来定义。

### 错误示例

```tsx
import React from 'react';

//               name没有定义类型
const Hello = ({ name }) => <div>Hello {name}</div>;

export default Hello;
```

### 正确示例

```tsx
import React from 'react';

interface Props {
  name: string;
}

const Hello = ({ name }: Props) => <div>Hello {name}</div>;

export default Hello;
```

### 参考

- [react/prop-types](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md)
