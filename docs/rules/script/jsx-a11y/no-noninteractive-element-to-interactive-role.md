# jsx-a11y/no-noninteractive-element-to-interactive-role

非交互元素不能赋予交互角色

### 为什么

非交互HTML元素在用户界面中表示内容和容器，如`<main>`, `<area>`, `<h1>` (,`<h2>`等), `<img>`, `<li>`, `<ul>` 和 `<ol>`。

交互HTML元素在用户界面中表示控件，如`<a href>`, `<button>`, `<input>`, `<select>`, `<textarea>`。

交互的ARIA角色包括`button`, `link`, `checkbox`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch` 和 `textbox`。

### 建议

去掉role属性,并将节点包裹在交互元素内部。

### 错误示例

```js
<main role="button" />
```

### 正确示例

```js
<div role="button">
  <main />
</div>
```

### 参考

- [jsx-a11y/no-noninteractive-element-to-interactive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md)
- [WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro)
