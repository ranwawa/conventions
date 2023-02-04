# 具有 ARIA 角色的元素必须具有该角色所需的所有属性

## bad

```jsx
<!-- Bad: the checkbox role requires the aria-checked state -->
<span role="checkbox" aria-labelledby="foo" tabindex="0"></span>
```

## good

```jsx
<!-- Good: the checkbox role requires the aria-checked state -->
<span role="checkbox" aria-checked="false" aria-labelledby="foo" tabindex="0"></span>
```

## 参考:

- [role-supports-aria-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/role-supports-aria-props)
