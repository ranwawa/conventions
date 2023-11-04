# jsx-a11y/aria-unsupported-elements

禁止在不支持ARIA的DOM元素上使用ARIA属性

### 为什么

某些保留的DOM元素不支持ARIA角色、状态和属性。因为这些DOM不可见，例如`meta`、`html`、`script`、`style`。

在这些DOM元素上使用`role`或`aria-*`属性显然不会有任何效果。

### 建议

换成div标签

### 错误示例

```js
<meta charset="UTF-8" aria-hidden="false" />
```

### 正确示例

```js
<div charset="UTF-8" aria-hidden="false" />
```

### 参考

- [jsx-a11y/aria-unsupported-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md)
