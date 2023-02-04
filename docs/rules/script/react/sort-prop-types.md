# 为用户定义的 jsx 组件强制执行驼峰拼写法

## Why?

> 为了统一编码风格

## bad

```jsx
<Test_component />

<TEST_COMPONENT />
```

## good

```jsx
<TestComponent />

<TestComponent>
  <div />
</TestComponent>
```

## 参考:

- [sort-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/sort-prop-types)
