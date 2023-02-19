# jsx-indent-props

在 jsx 中强制执行事件处理函数的命名规范

### 为什么?

确保用于处理事件的任何组件 prop 方法都带有正确的前缀。

### 错误示例

```jsx

<MyComponent handleChange={this.handleChange} />

<MyComponent onChange={this.componentChanged} />
```

### 正确示例

```jsx
<MyComponent onChange={this.handleChange} />

<MyComponent onChange={this.props.onFoo} />
```

### 参考

- [jsx-indent-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-indent-props)
