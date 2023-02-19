# prefer-exact-props

强制在 React 元素中不使用命名空间

why?

强制在 React 元素中不存在命名空间，例如 with svg:circle，因为它们在 React 中不受支持
> bad

```jsx
<ns:TestComponent />

<Ns:TestComponent />
```

### 正确示例

```jsx
<TestComponent />

<testComponent />
```

### 参考

- [prefer-exact-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/prefer-exact-props)
