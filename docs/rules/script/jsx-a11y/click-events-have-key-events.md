# jsx-a11y/click-events-have-key-events

必须为onClick事件添加键盘事件

### 为什么

对于不能使用鼠标的身体残疾用户，辅助技术兼容性和屏幕阅读器用户来说尤其如此。

特别是对那种习惯键盘操作的用户(比如我)来说,通过焦点也能够很好的配合vi语法操作网页.

### 建议

为onClick事件添加onKeyUp、onKeyDown、onKeyPress中的至少一个。

### 错误示例

```js
<div onClick={() => {}} />
```

### 正确示例

```js
<div onClick={() => {}} onKeyDown={this.handleKeyDown} />
```

### 参考

- [jsx-a11y/click-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md)
