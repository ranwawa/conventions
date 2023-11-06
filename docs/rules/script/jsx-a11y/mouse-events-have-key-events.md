# jsx-a11y/mouse-events-have-key-events

鼠标事件必须伴随键盘事件

### 为什么

为了照顾不能使用鼠标的身体残疾用户，还有那些重度的vi用户。

### 建议

在使用鼠标事件时，必须同时提供对应的键盘事件。

### 错误示例

```js
<div onMouseOver={() => void 0} />
```

### 正确示例

```js
<div onMouseOver={() => void 0} onFocus={() => void 0} />
```

### 参考

- [jsx-a11y/mouse-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md)
