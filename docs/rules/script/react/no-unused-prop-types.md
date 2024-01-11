# react/no-unused-prop-types

禁止定义未使用的propTypes

### 为什么

如果一个prop定义了类型但没有被使用，那就是多余的代码，应该被删除。

### 建议

确保定义的propTypes都被使用了。

### 错误示例

```tsx
import React from 'react';

export default class Hello extends React.Component {
  name = 'ranwawa';

  render() {
    return <div>{this.ranwawa}</div>;
  }
}

Hello.propTypes = {
  // name属性在组件中没有被使用
  name: PropTypes.string
};
```

### 正确示例

```tsx
import React from 'react';

export default class Hello extends React.Component {
  age = 18;

  render() {
    const { name } = this.props;
    return (
      <div>
        {name} {this.age}
      </div>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string
};
```

### 参考

- [react/no-unused-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md)
