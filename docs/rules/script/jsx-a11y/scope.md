# jsx-a11y/scope

`scope`属性只能用在`<th>`元素上

### 为什么

`scope`属性是专门为`<th>`元素设计的，用于提高网页的可访问性。

### 建议

只在`<th>`元素上使用`scope`属性。

### 错误示例

```js
<div scope />
```

### 正确示例

```js
<th scope="col" />
```

### 参考

- [jsx-a11y/scope](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md)
- [scope MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/th)
