# jsx-a11y/aria-activedescendant-has-tabindex

必须为带有aria-activedescendant属性的元素设置tabIndex

### 为什么

aria-activedescendant 用于管理复合组件（如列表框、树形视图等）内的焦点。带有 aria-activedescendant 属性的元素保留活动文档焦点，它通过将该元素的ID分配给 aria-activedescendant 的值来指示其子元素中哪一个具有二次焦点。

例如，在一个搜索类型的选择列表中，搜索输入框保留文档焦点，以便用户可以在输入框中输入。如果按下向下箭头键并突出显示搜索建议，则会将建议元素的ID作为输入元素上 aria-activedescendant 的值应用。这样，虽然文档的焦点仍在输入框上，但是屏幕阅读器会读出当前被选中的搜索建议，从而提供更好的无障碍体验。

因为aria-activedescendant是给父组件用的,所以肯定是可以操作的,可以操作的元素,就必须给tableindex,方便键盘导航

### 建议

为带有aria-activedescendant属性的元素设置tabIndex属性

### 错误示例

```js
<div aria-activedescendant="ranwawa" />
```

### 正确示例

```js
<div aria-activedescendant="ranwawa" tabIndex={0} />
```

### 参考

- [jsx-a11y/aria-activedescendant-has-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md)
- [aria-activedescendant MDN文档](https://developer.mozilla.org/en-US/docs/web/Accessibility/ARIA/Attributes/aria-activedescendant)
