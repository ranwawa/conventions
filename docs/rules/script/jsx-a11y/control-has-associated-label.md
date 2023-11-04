# jsx-a11y/control-has-associated-label

交互元素必须有文本标签

### 为什么

交互元素（如按钮、输入框等）应该有一个文本标签来描述其功能。这样当视觉障碍的人访问页面时,可以通过声音读出来有一个可以点击的按钮.

### 建议

在标签里面输入文字，或者使用`aria-label`或`aria-labelledby`属性。

### 错误示例

```js
<button type="button" />
```

### 正确示例

```js
<div>
  <button type="button" aria-label="保存" />
  <button type="button">保存</button>
</div>
```

### 参考

- [jsx-a11y/control-has-associated-label](https://eslint.org/docs/rules/jsx-a11y/control-has-associated-label)
