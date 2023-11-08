# jsx-a11y/no-noninteractive-element-interactions

禁止在非交互元素上添加交互事件

### 为什么

非交互HTML元素和非交互ARIA角色在用户界面中表示内容和容器。

非交互元素不支持事件处理程序(鼠标和键处理程序)。非交互元素包括`<main>`, `<area>`, `<h1>` (,`<h2>`, 等), `<p>`, `<img>`, `<li>`, `<ul>` 和 `<ol>`。

非交互的WAI-ARIA角色包括`article`, `banner`, `complementary`, `img`, `listitem`, `main`, `region` 和 `tooltip`。

### 建议

将事件处理函数移动到一个语义上是交互元素(`<button>`, `<a href>`)或具有交互角色的内部元素上。

### 错误示例

```js
<div onClick={() => void 0} role="listitem" />
```

### 正确示例

```js
<div onClick={() => void 0} role="button" />
```

### 参考

- [jsx-a11y/no-noninteractive-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md)
