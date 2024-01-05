# react/no-deprecated

禁止使用已废弃的方法

### 为什么

增量代码如果一直使用旧的API,那技术债务就永远也解决不完了

### 建议

使用最新的React方法替代已废弃的方法。

### 错误示例

```tsx
componentWillMount() { }
componentWillReceiveProps() { }
componentWillUpdate() { }
```

### 正确示例

```tsx
componentMounted() { }
```

### 参考

- [react/no-deprecated](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md)
