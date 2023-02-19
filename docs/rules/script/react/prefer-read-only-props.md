# prefer-read-only-props

禁止 JSX props 传播

why?

强制任何 JSX 属性都没有传播，有利于可维护性
> bad

```jsx
<App {...props} />
<MyCustomComponent {...props} some_other_prop={some_other_prop} />
<img {...props} />
```

### 正确示例

```jsx
const {src, alt} = props;
const {one_prop, two_prop} = otherProps;
<MyCustomComponent one_prop={one_prop} two_prop={two_prop} />
<img src={src} alt={alt} />
```

### 参考

- [prefer-read-only-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/prefer-read-only-props)
