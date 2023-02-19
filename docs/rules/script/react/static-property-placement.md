# static-property-placement

static-property-placement

必须将 props 属性类型检查及默认值放在类函数外

why?

defaultProps 和 propTypes 主要是运行时的参数类型检测,和实际业务代码没有太大关系.为统一代码写法规范,请将其移到类外面

### 错误示例

```jsx
class MyComponent extends React.Component {
  static defaultProps = {
    /*...*/
  };
  static propTypes = {
    /*...*/
  };
}
```

### 正确示例

```jsx
class MyComponent extends React.Component {
  /*...*/
}
MyComponent.defaultProps = {
  /*...*/
};
MyComponent.propTypes = {
  /*...*/
};
```

## 参考

- [static-property-placement](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md)
