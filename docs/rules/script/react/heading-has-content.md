# heading-has-content

强制控件（交互式元素）具有文本标签

why?

用于解释按钮的用处

### 错误示例

```jsx
<button type="button" class="icon-save" />
```

### 正确示例

```jsx
<button type="button" aria-label="Save" class="icon-save" />
```

### 参考

- [heading-has-content](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/heading-has-content)
