# react/forbid-prop-types

禁止使用any,array,object

### 为什么

`any`，`array`，`object`不够明确,降低了代码的可维护性

### 建议

`any`应该被替换为任何东西。`array`和`object`可以分别替换为`arrayOf`和`shape`。

### 错误示例

```tsx
import { PropTypes } from 'prop-types';

const MyComponent = ({ a }) => a;

MyComponent.propTypes = {
  a: PropTypes.any,
  r: PropTypes.array,
  o: PropTypes.object
};
```

### 正确示例

```tsx
import { PropTypes } from 'prop-types';

const MyComponent = ({ a }) => a;

MyComponent.propTypes = {
  a: PropTypes.string,
  r: PropTypes.arrayOf(PropTypes.string),
  o: PropTypes.shape({})
};
```

### 参考

- [react/forbid-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md)
