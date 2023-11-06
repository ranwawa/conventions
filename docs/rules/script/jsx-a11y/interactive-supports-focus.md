# jsx-a11y/interactive-supports-focus

交互元素必须可聚焦

### 为什么

具有交互角色和交互处理器(鼠标或键盘按键)的元素必须可聚焦。这样就可以通过tab健进行访问

### 建议

添加`tabIndex`属性，值为大于0的数字。

### 错误示例

```js
<div role="button" />
```

### 正确示例

```js
<div role="button" tabIndex={0} />
```

### 参考

- [jsx-a11y/interactive-supports-focus](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md)
