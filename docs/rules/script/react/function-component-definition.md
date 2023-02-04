# 防止相邻的内联元素不被空格分隔

why?

> 当以无样式方式查看时，未由空格分隔的相邻内联元素会相互碰撞，这通常是不可取的
> bad

```jsx
<div><a></a><a></a></div>
<div><a></a><span></span></div>
```

## good

```jsx
<div><div></div><div></div></div>
<div><a></a> <a></a></div>
```

## 参考:

- [function-component-definition](https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/function-component-definition)
