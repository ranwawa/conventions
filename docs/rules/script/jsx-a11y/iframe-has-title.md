# jsx-a11y/iframe-has-title

iframe必须有标题

### 为什么

屏幕阅读器会将一个网页中所有的iframe提取出来,以方便在不同的iframe之间快速切换,如果iframe没有标题的话,这种切换就变得非常麻烦.

### 建议

给iframe添加一个独特的title属性。

### 错误示例

```js
<iframe />
```

### 正确示例

```js
<iframe title="This is a unique title" />
```

### 参考

- [jsx-a11y/iframe-has-title](https://github.com/bradbirdsallCHANGED/eslint-plugin-jsx-a11y/blob/main/docs/rules/jsx-a11y/iframe-has-title.md)
- [axe-core,frame-title](https://dequeuniversity.com/rules/axe/3.2/frame-title)
