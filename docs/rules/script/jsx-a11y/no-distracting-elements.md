# jsx-a11y/no-distracting-elements

禁止使用分散注意力的元素

### 为什么

视觉上分散注意力的元素可能会给视觉受损的用户带来可访问性问题。这些元素大多已被弃用，应避免使用。

### 建议

避免使用 `<marquee>` 和 `<blink>` 这两个元素。

### 错误示例

```js
<marquee />
```

### 正确示例

```js
<div />
```

### 参考

- [jsx-a11y/no-distracting-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md)
