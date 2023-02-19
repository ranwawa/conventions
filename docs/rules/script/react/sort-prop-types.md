# sort-prop-types

为用户定义的 jsx 组件强制执行驼峰拼写法

### 为什么?

为了统一编码风格

### 错误示例

```jsx
<Test_component />

<TEST_COMPONENT />
```

### 正确示例

```jsx
<TestComponent />

<TestComponent>
  <div />
</TestComponent>
```

### 参考

- [sort-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/sort-prop-types)
