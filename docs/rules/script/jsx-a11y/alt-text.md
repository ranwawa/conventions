# jsx-a11y/alt-text

必须为需要替代文本的元素提供描述信息

### 为什么

为了让使用屏幕阅读器的用户能够理解页面上内容的目的，所有需要替代文本的元素都必须提供有意义的信息。屏幕阅读器可以将描述信息转换成声音,让那些视障人士可以听见这个元素主要是干什么的.

### 建议

如`<img>`, `<area>`, `<input type="image">`, 和 `<object>`，都需要设置有意义的`alt`属性或者`aria-label`或`aria-labelledby`属性。

### 错误示例

```js
<img src="foo" />
```

### 正确示例

```js
<img src="foo" alt="这是一张猫在吃鱼的图片" />
```

### 参考

- [jsx-a11y/alt-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)
