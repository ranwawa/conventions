# 确保 autocomplete 属性正确并适合与其一起使用的表单字段

## bad

```jsx
<!-- Bad: the autocomplete attribute has an invalid value -->
<input type="text" autocomplete="incorrect" />

<!-- Bad: the autocomplete attribute is on an inappropriate input element -->
<input type="email" autocomplete="url" />

<!-- Bad: MyInput is listed in inputComponents -->
<MyInput autocomplete="incorrect" />
```

## good

```jsx
<!-- Good: the autocomplete attribute is used according to the HTML specification -->
<input type="text" autocomplete="name" />

<!-- Good: MyInput is not listed in inputComponents -->
<MyInput autocomplete="incorrect" />
```

## 参考:

- [click-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/click-events-have-key-events)
