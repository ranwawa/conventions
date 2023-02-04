# 元素上的 lang 属性必须具有有效值

why?

> HTML 文档中指定的语言必须是有效语言之一，以确保屏幕阅读器用户可以正确发音。

## bad

```jsx
<html>
<html lang="foo">
```

## good

```jsx
<html lang="en">
<html lang="en-US">
```

## 参考:

- [media-has-caption](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/media-has-caption)
