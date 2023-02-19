# click-events-have-key-events

必须把 onClick 和 onKeyUp, onKeyDown, onKeyPres 和 一起使用

why?

没法使用鼠标的残障用户触发不了点击事件,屏幕阅读器也识别不了点击事件。所以要将键盘事件和点击事件一起用.交互式元素和隐藏元素除外

TODO: 有哪些交互式元素

### 错误示例

```jsx
<div onClick={() => {}} />
```

### 正确示例

```jsx
<div onClick={() => {}} onKeyDown={this.handleKeyDown} />
<div onClick={() => {}} onKeyUp={this.handleKeyUp} />
<div onClick={() => {}} onKeyPress={this.handleKeyPress} />

// 交互式元素
<button onClick={() => {}} />

// 手动标记的隐藏元素
<div onClick{() => {}} aria-hidden="true" />
```

## 参考

- [jsx-a11y/click-events-have-key-events.md](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md)
