# jsx-a11y/lang

HTML元素的语言属性必须符合规范

### 为什么

`<html>`元素的`lang`属性必须是有效的IETF的BCP 47语言标签，这有助于提高网页的可访问性。

### 建议

参照`BCP47`规范设置语言

### 错误示例

```jsx
<html lang="foo">
```

### 正确示例

```jsx
<html lang="en">
```

### 参考

- [jsx-a11y/lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md)
- [BCP47](https://datatracker.ietf.org/doc/html/bcp47)
