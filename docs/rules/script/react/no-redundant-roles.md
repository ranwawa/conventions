# no-redundant-roles

不必为无序列表中的项目添加 tabindex

why?

Tab 键导航应仅限于页面上可以交互的元素。因此，不必为无序列表中的项目添加 tabindex，例如，通过辅助技术使它们可导航。这些应用程序已经提供了基于页面 HTML 的页面遍历机制。一般来说，我们应该尽量减少页面标签环的大小，而不是增加它

### 错误示例

```jsx
<div tabIndex="0" />
<div role="article" tabIndex="0" />
<article tabIndex="0" />
<article tabIndex={0} />
```

### 正确示例

```jsx
<div />
<MyButton tabIndex={0} />
<button />
<button tabIndex="0" />
<button tabIndex={0} />
<div />
<div tabIndex="-1" />
<div role="button" tabIndex="0" />
<div role="article" tabIndex="-1" />
<article tabIndex="-1" />
```

### 参考

- [no-redundant-roles](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-redundant-roles)
