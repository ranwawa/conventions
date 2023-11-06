# jsx-a11y/label-has-associated-control

label必须有文本标签和关联的控件

### 为什么

这样在点击文本的时候就可以直接聚焦到控件上面

### 建议

- 如果你只想要一个与输入关联的文本标签，最简单的方法是将输入包裹在标签中。
- 如果标签是控件的兄弟元素，使用`htmlFor`和ID来关联控件。

### 错误示例

```js
<div>
  <input type="text" />
  <label>zhangshan</label>
</div>
```

### 正确示例

```js
<label htmlFor="name">
  zhangshan
  <input type="text" id="name" />
</label>
```

### 参考

- [jsx-a11y/label-has-associated-control](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md)
