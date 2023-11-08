# jsx-a11y/no-static-element-interactions

禁止在静态HTML元素上添加交互事件

### 为什么

静态HTML元素没有语义含义，例如`<div>`。如果要给静态元素添加交互性，如鼠标或键盘事件监听器，那么该元素必须被赋予一个角色值。

### 建议

如果元素的行为类似于按钮、链接、菜单项等，使用`role`属性指示元素的角色。

如果元素只是用来捕获冒泡事件，那么没有适合的角色可以赋予，直接禁用此规则。

### 错误示例

```js
<div onClick={() => {}} />
```

### 正确示例

```js
<div className="foo" onClick={() => {}} role="button" />
```

### 参考

- [jsx-a11y/no-static-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md)
