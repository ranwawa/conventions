# 防止子项和 props.dangerouslySetInnerHTML 之间出现问题

why?

> 此规则有助于防止同时使用 children 和 dangerouslySetInnerHTML 属性引起的问题

## bad

```jsx
<div dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</div>

<Hello dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</Hello>

React.createElement("div", { dangerouslySetInnerHTML: { __html: "HTML" } }, "Children");

React.createElement("Hello", { dangerouslySetInnerHTML: { __html: "HTML" } }, "Children");
```

## good

```jsx
<div dangerouslySetInnerHTML={{ __html: "HTML" }} />

<Hello dangerouslySetInnerHTML={{ __html: "HTML" }} />

<div>
  Children
</div>

<Hello>
  Children
</Hello>

React.createElement("div", { dangerouslySetInnerHTML: { __html: "HTML" } });

React.createElement("Hello", { dangerouslySetInnerHTML: { __html: "HTML" } });

React.createElement("div", {}, "Children");

React.createElement("Hello", {}, "Children");

```

## 参考:

- [no-unused-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-unused-prop-types)
