# jsx-a11y/no-noninteractive-tabindex

禁止在非交互元素上使用tabindex

### 为什么

Tab键导航应限制在页面上可以交互的元素上,要尽量减小页面的tab数量。

### 建议

只将可tab的元素限制在用户可以操作的元素上。

### 错误示例

```js
<div tabIndex="0" />
```

### 正确示例

```js
<button tabIndex="0" />
```

### 参考

- [jsx-a11y/no-noninteractive-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md)
