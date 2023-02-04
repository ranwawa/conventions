# 禁止使用单行注释

## Why?

> CSS 不支持单行注释,请改成多行块注释

## bad

```css
a {
  // color: pink;
}
```

## good

```css
a {
  /* color: pink; */
}
```

## 参考

- [no-invalid-double-slash-comments](https://stylelint.io/user-guide/rules/list/no-invalid-double-slash-comments)
