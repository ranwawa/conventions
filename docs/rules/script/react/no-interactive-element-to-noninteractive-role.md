# no-interactive-element-to-noninteractive-role

强制不使用分散注意力的元素

why?

分散视觉注意力的元素可能会导致视障用户出现可访问性问题。此类元素很可能已被弃用，应避免使用

### 错误示例

```jsx
<marquee />
<blink />
```

### 正确示例

```jsx
<div />
```

### 参考

- [no-interactive-element-to-noninteractive-role](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-interactive-element-to-noninteractive-role)
