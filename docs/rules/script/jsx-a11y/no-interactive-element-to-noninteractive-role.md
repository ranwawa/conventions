# jsx-a11y/no-interactive-element-to-noninteractive-role

禁止将交互元素转换为非交互元素

### 为什么

交互元素包括`<a href>`, `<button>`, `<input>`, `<select>`, `<textarea>`。
非交互元素包括`<main>`, `<area>`, `<h1>` (,`<h2>`, 等), `<img>`, `<li>`, `<ul>` 和 `<ol>`。
WAI-ARIA角色不应用于将交互元素转换为非交互元素。

### 建议

如果元素应该是一个容器，如文章，将交互元素包裹在一个带有所需角色的`<div>`中。

如果元素应该是内容，如图片，将内容放在交互元素内部。

### 错误示例

```js
<button role="article">Save</button>
```

### 正确示例

```js
<div role="article">
  <button>Save</button>
</div>
```

### 参考

- [jsx-a11y/no-interactive-element-to-noninteractive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md)
