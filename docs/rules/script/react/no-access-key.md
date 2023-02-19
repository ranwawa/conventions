# no-access-key

强制 onmouseover/onmouseout 伴随着 onfocus/onblur

why?

键盘编码对于无法使用鼠标的身体残疾用户、AT 兼容性和屏幕阅读器用户非常重要

### 错误示例

```jsx
<div onMouseOver={ () => void 0 } />
<div onMouseOut={ () => void 0 } />
<div onMouseOver={ () => void 0 } {...otherProps} />
<div onMouseOut={ () => void 0 } {...otherProps} />
```

### 正确示例

```jsx
<div onMouseOver={ () => void 0 } onFocus={ () => void 0 } />
<div onMouseOut={ () => void 0 } onBlur={ () => void 0 } />
<div onMouseOver={ () => void 0 } onFocus={ () => void 0 } {...otherProps} />
<div onMouseOut={ () => void 0 } onBlur={ () => void 0 } {...otherProps} />
```

### 参考

- [no-access-key](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-access-key)
