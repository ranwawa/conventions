# jsx-a11y/anchor-has-content

锚点必须有内容

### 为什么

锚点必须有内容并且内容对屏幕阅读器可访问(不是使用`aria-hidden`属性)。

### 建议

焦点就是用来点击的,你搞个焦点,里面却没有东西有啥实际意义呢?

### 错误示例

```js
<div>
  <a></a>
  <TextWrapper aria-hidden />
</div>
```

### 正确示例

```js
<a>
  <TextWrapper />
</a>
```

### 参考

- [jsx-a11y/anchor-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md)
- [无障碍4原则](https://www.w3.org/TR/using-aria/#fourth)
- [aria-hidden MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
