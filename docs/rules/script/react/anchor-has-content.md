# anchor-has-content

强制要求所有需要替代文本的元素都具有有意义的信息以传递回最终用户

why?

这是屏幕阅读器用户可访问性的关键组成部分，以便他们了解页面上内容的用途
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

### 正确示例

```jsx
<img src="foo" alt="Foo eating a sandwich." />
<img src="foo" alt={"Foo eating a sandwich."} />
<img src="foo" alt={altText} />
<img src="foo" alt={`${person} smiling`} />
<img src="foo" alt="" />
```

### 参考

- [anchor-has-content](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/anchor-has-content)
