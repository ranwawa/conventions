# iframe-has-title

元素必须有 lang 属性

why?

配置屏幕阅读器时，用户选择默认语言。如果未指定网页的语言，屏幕阅读器将采用用户设置的默认语言。对于说多种语言并以一种以上语言访问网站的用户来说，语言设置成为一个问题。必须指定一种语言并确保其有效，这样网站文本才能正确发音。

### 错误示例

```jsx
<html>
```

### 正确示例

```jsx
<html lang="en">
<html lang="en-US">
<html lang={language}>
```

### 参考

- [iframe-has-title](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/iframe-has-title)
