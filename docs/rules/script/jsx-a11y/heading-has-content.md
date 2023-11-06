# jsx-a11y/heading-has-content

标题元素必须有内容

### 为什么

标题元素(\<H1>...\<H6>)是一个文档结构,屏幕阅读器可以用它来提取整个页面的大纲,搜索引擎也是如此.如果标题内容是空的,会对大纲结构产生影响,从而降低网站的可访问性.

### 建议

确保所有的标题元素都有内容，并且内容对屏幕阅读器是可访问的。

### 错误示例

```jsx
<h1 />
<h1><TextWrapper aria-hidden />
```

### 正确示例

```jsx
<h1>ranwawa</h1>
```

### 参考

- [jsx-a11y/heading-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md)
- [WCAG 2.4.6](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [axe-core, empty-heading](https://dequeuniversity.com/rules/axe/3.2/empty-heading)
