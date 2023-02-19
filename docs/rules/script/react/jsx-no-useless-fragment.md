# jsx-no-useless-fragment

防止使用 javascript:URL

why?

任何以 javascript: scheme 开头的 URL 都会记录一个警告。React 将该模式视为危险的攻击面
> bad

```jsx
<a href="javascript:"></a>
<a href="javascript:void(0)"></a>
<a href="j\n\n\na\rv\tascript:"></a>
```

### 正确示例

```jsx
<Foo href="javascript:"></Foo>
<a href={"javascript:"}></a>
```

### 参考

- [jsx-no-useless-fragment](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-useless-fragment)
