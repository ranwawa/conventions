# aria-activedescendant 元素必须有大于 0 的 tabIndex

why?

> 因为一个元素 aria-activedescendant 是 通过 tab 键聚焦的，所以它必须要有一个固有大于 0 的 tabIndex

## bad

```jsx
<div aria-activedescendant={someID} />
<div aria-activedescendant={someID} tabIndex={-1} />
<div aria-activedescendant={someID} tabIndex="-1" />
<input aria-activedescendant={someID} tabIndex={-1} />
```

## good

```jsx
<CustomComponent />
<CustomComponent aria-activedescendant={someID} />
<CustomComponent aria-activedescendant={someID} tabIndex={0} />
<CustomComponent aria-activedescendant={someID} tabIndex={-1} />
```

## 参考:

- [aria-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/aria-props)
