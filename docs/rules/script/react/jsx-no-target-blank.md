# react/jsx-no-target-blank

禁止在没有rel="noreferrer"的情况下使用target="\_blank"属性

### 为什么

在创建一个具有a标签的JSX元素时，通常希望使用target='\_blank'属性在新标签页中打开链接。然而，如果这个属性没有伴随rel='noreferrer'，则会构成严重的安全漏洞。

### 建议

在使用target='\_blank'属性时，必须伴随rel='noreferrer'。

### 错误示例

```tsx
import React from 'react';

const Hello = () => (
  <a target="_blank" href="https://example.com/">
    example
  </a>
);

export default Hello;
```

### 正确示例

```tsx
import React from 'react';

const Hello = () => (
  <a rel="noreferrer" target="_blank" href="https://example.com/">
    example
  </a>
);

export default Hello;
```

### 参考

- [react/jsx-no-target-blank](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md)
