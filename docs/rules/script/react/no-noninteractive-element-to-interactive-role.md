# no-noninteractive-element-to-interactive-role

非交互元素不支持事件处理程序（鼠标和键处理程序）

### 错误示例

```jsx
<li onClick={() =void 0} />
<div onClick={() => void 0} role="listitem" />
```

### 正确示例

```jsx
<div onClick={() => void 0} role="button" />
<div onClick={() => void 0} role="presentation" />
<input type="text" onClick={() => void 0} /> // Interactive element does not require role.
<button onClick={() => void 0} className="foo" /> // button is interactive.
<div onClick={() => void 0} role="button" aria-hidden /> // This is hidden from screenreader.
<Input onClick={() => void 0} type="hidden" /> // This is a higher-level DOM component
```

### 参考

- [no-noninteractive-element-to-interactive-role](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-noninteractive-element-to-interactive-role)
