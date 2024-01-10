# react/no-find-dom-node

禁止使用findDOMNode

### 为什么

`findDOMNode`在新版本中可能会被废弃

### 建议

推荐使用回调refs代替

### 错误示例

```tsx
import React from 'react';
import ReactDOM from 'react-dom';

export default class MyComponent extends React.Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  render() {
    return <div />;
  }
}
```

### 正确示例

```tsx
import React from 'react';

export default class MyComponent extends React.Component {
  node = null;

  render() {
    console.log(this.node);

    return (
      <div
        ref={(ref) => {
          this.node = ref;
        }}
      />
    );
  }
}
```

### 参考

- [react/no-find-dom-node](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md)
- [Dan Abramov的评论和示例](https://github.com/jsx-eslint/eslint-plugin-react/issues/678#issue-165177220)。
