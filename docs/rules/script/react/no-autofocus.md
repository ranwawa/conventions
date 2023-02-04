# 在元素上强制没有 accessKey 属性

why?

> 访问键是 HTML 属性，允许 Web 开发人员将键盘快捷键分配给元素。屏幕阅读器和纯键盘用户使用的键盘快捷键和键盘命令之间的不一致会造成可访问性复杂性，因此为避免复杂性，不应使用访问键

## bad

```jsx
<div accessKey="h" />
```

## good

```jsx
<div />
```

## 参考:

- [no-autofocus](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/no-autofocus)
