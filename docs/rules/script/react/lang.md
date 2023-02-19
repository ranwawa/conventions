# lang

强制 label 标签具有文本标签和关联的控件

why?

此规则检查任何 label 标签（或将输出 label 标签的指定自定义组件）是否 (1) 包装 input 元素（或将输出标签的指定自定义组件 input）或 (2) 具有 htmlFor 属性并且 label 标签具有文本内容。

### 错误示例

```jsx
<input type="text" />
<label>Surname</label>
```

### 正确示例

```jsx
<label>
  <input type="text" />
  Surname
</label>
```

### 参考

- [lang](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/lang)
