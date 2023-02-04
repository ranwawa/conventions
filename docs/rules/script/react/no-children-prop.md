# 防止无效字符出现在标记中

why?

> 防止您可能认为是 jsx 转义字符的字符被意外地作为文本节点注入 jsx 语句中

## bad

```jsx
<div> > </div>
```

## good

```jsx
<div> &gt; </div>

<div> {'>'} </div>
```

## 参考:

- [no-children-prop](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-children-prop)
