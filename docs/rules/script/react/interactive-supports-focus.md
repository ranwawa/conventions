# 强制 img alt 属性不包含单词 image、picture 或 photo

why?

> 屏幕阅读器已经将 img 元素宣布为图像。无需使用诸如 image、photo 和/或 picture 之类的词

## bad

```jsx
<img src="foo" alt="Photo of foo being weird." />
<img src="bar" alt="Image of me at a bar!" />
<img src="baz" alt="Picture of baz fixing a bug." />
```

## good

```jsx
<img src="foo" alt="Foo eating a sandwich." />
<img src="bar" aria-hidden alt="Picture of me taking a photo of an image" /> // Will pass because it is hidden.
<img src="baz" alt={`Baz taking a ${photo}`} /> // This is valid since photo is a variable name.
```

## 参考:

- [interactive-supports-focus](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/interactive-supports-focus)
