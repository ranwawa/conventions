# 强制锚点包含内容

why?

> bad

```jsx
<img src="foo" />
<img {...props} />
<img {...props} alt /> // Has no value
<img {...props} alt={undefined} /> // Has no value
<img {...props} alt={`${undefined}`} /> // Has no value
<img src="foo" role="presentation" /> // Avoid ARIA if it can be achieved without
<img src="foo" role="none" /> // Avoid ARIA if it can be achieved without
```

## good

```jsx
<img src="foo" alt="Foo eating a sandwich." />
<img src="foo" alt={"Foo eating a sandwich."} />
<img src="foo" alt={altText} />
<img src="foo" alt={`${person} smiling`} />
<img src="foo" alt="" />
```

## 参考:

- [anchor-is-valid](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/anchor-is-valid)
