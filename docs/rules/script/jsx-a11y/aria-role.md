# jsx-a11y/aria-role

必须使用有效的非抽象ARIA角色

### 为什么

具有ARIA角色的元素必须使用有效的非抽象ARIA角色，以提高网页的可访问性。

### 建议

确保你的ARIA角色是有效的，并且不是抽象的。

### 错误示例

```js
<div role="datepicker"></div> // 错误: "datepicker"不是一个ARIA角色
```

### 正确示例

```js
<div role="button"></div> // 正确: "button"是一个有效的ARIA角色
```

### 参考

- [jsx-a11y/aria-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)
- [aria-role MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles)
