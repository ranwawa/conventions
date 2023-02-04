# 强制在 JSX 属性中一致地使用双引号或单引号

## Why?

> 统一代码规范，全使用双引号或全使用单引号

## bad

```jsx
/*eslint jsx-quotes: ["error", "prefer-single"]*/
<a b="c" />
```

## good

```jsx
/*eslint jsx-quotes: ["error", "prefer-single"]*/

<a b='c' />
<a b="'" />
```

## 参考:

- [class-methods-use-this](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/class-methods-use-this)
