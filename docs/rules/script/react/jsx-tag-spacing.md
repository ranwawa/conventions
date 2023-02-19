# jsx-tag-spacing

防止将子项作为 props 传递

why?

使用 jsx 时，子项应该嵌套在开始和结束标记之间。不使用 jsx 时，应将子项作为附加参数传递给 React.createElement.

### 错误示例

```jsx
<div children='Children' />

<MyComponent children={<AnotherComponent />} />
<MyComponent children={['Child 1', 'Child 2']} />

React.createElement("div", { children: 'Children' })
```

### 正确示例

```jsx
<div>Children</div>

<MyComponent>Children</MyComponent>

<MyComponent>
  <span>Child 1</span>
  <span>Child 2</span>
</MyComponent>

React.createElement("div", {}, 'Children')
React.createElement("div", 'Child 1', 'Child 2')
```

### 参考

- [jsx-tag-spacing](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-tag-spacing)
