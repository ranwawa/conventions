# no-invalid-double-slash-comments

禁止使用单行注释

### 为什么?

CSS 不支持单行注释,请改成多行块注释

### 错误示例

```css
a {
  // color: pink;
}
```

### 正确示例

```css
a {
  /* color: pink; */
}
```

## 参考

- [no-invalid-double-slash-comments](https://stylelint.io/user-guide/rules/list/no-invalid-double-slash-comments)
