# 强制所有的 aria-\* props 都是有效的

why?

> 元素不能使用无效的 ARIA 属性。如果它找到未在 WAI-ARIA States and Properties spec 中列出 aria-\*属性，这将失败

## bad

```jsx
<!-- Bad: Labeled using incorrectly spelled aria-labeledby -->
<div id="address_label">Enter your address</div>
<input aria-labeledby="address_label">
```

## good

```jsx
<!-- Good: Labeled using correctly spelled aria-labelledby -->
<div id="address_label">Enter your address</div>
<input aria-labelledby="address_label">
```

## 参考:

- [aria-proptypes](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/aria-proptypes)
