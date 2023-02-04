# 强制某些元素不支持支持 ARIA 角色、状态和属性

why?

> 某些保留的 DOM 元素不支持 ARIA 角色、状态和属性。这通常是因为它们不可见，例如 meta, html, script, style。此规则强制这些 DOM 元素不包含 roleand/oraria-\*道具

## bad

```jsx
<!-- Bad: the meta element should not be given any ARIA attributes -->
<meta charset="UTF-8" aria-hidden="false" />
```

## good

```jsx
<!-- Good: the meta element should not be given any ARIA attributes -->
<meta charset="UTF-8" />
```

## 参考:

- [autocomplete-valid](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/autocomplete-valid)
