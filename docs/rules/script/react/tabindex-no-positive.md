# 强制 tabIndex 值不大于零

why?

> 避免使用正 tabIndex 属性值以使页面流与键盘 Tab 键顺序同步

## bad

```jsx
<span tabIndex="0">foo</span>
<span tabIndex="-1">bar</span>
<span tabIndex={0}>baz</span>
```

## good

```jsx
<th scope="col" />
<th scope={scope} />
```

## 参考:

- [tabindex-no-positive](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/tabindex-no-positive)
