# jsx-a11y/anchor-is-valid

禁止使用无效的锚点

### 为什么

使用a标签,就要给href属性.

### 建议

如果你想要一个可点击的UI元素，用`<button>`元素。如果你需要创建一个用户可以鼠标悬停或鼠标移出的界面元素，考虑使用`<div>`元素。

### 错误示例

```js
<a href="javascript:void(0)" onClick={(location.href = 'baidu.com')}>
  前往百度
</a>
```

### 正确示例

```js
<a href="baidu.com">前往百度</a>
```

### 参考

- [jsx-a11y/anchor-is-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)
