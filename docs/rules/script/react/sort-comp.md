# react/sort-comp

强制组件方法顺序

### 为什么

始终遵循相同的顺序组织属性和方法，可以帮助你轻松找到生命周期方法、事件处理程序等。统一风格,有利于提升代码的可读性和可维护性.

### 建议

按照以下顺序组织方法：

- 静态方法和属性
- 生命周期方法
- 自定义方法
- render方法。

### 错误示例

```tsx
import React from 'react';

export default class Hello extends React.Component {
  // render没有放在最后
  render() {
    return <div>{this.hello} ranwawa</div>;
  }

  hello = 'Hello';
}
```

### 正确示例

```tsx
import React from 'react';

export default class Hello extends React.Component {
  hello = 'Hello';

  render() {
    return <div>{this.hello} ranwawa</div>;
  }
}
```

### 参考

- [react/sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)
