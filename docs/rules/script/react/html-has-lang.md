# 强制标题元素（h1、h2 等）具有内容并且屏幕阅读器可以访问该内容

why?

> 屏幕阅读器会提醒用户注意标题标签的存在。如果标题为空或无法访问文本，这可能会使用户感到困惑，甚至阻止他们访问页面结构上的信息。

## bad

```jsx
<h1 />
<h1><TextWrapper aria-hidden />
```

## good

```jsx
<h1>Heading Content!</h1>
<h1><TextWrapper /><h1>
<h1 dangerouslySetInnerHTML={{ __html: 'foo' }} />
```

## 参考:

- [html-has-lang](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/html-has-lang)
