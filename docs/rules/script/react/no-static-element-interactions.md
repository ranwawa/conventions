# 确保 html 元素上没有指定的冗余角色

why?

> 一些 HTML 元素具有由浏览器实现的本机语义。这包括默认/隐式 ARIA 角色。设置与其默认/隐式角色匹配的 ARIA 角色是多余的，因为它已经由浏览器设置。

## bad

```jsx
<button role="button" />
<img role="img" src="foo.jpg" />
```

## good

```jsx
<div />
<button role="presentation" />
<MyComponent role="main" />
```

## 参考:

- [no-static-element-interactions](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-static-element-interactions)
