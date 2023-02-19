# named-grid-areas-no-invalid

必须使用正确的命名栅格区域

### 为什么?

命名栅格区域至少要有一个元素,每行的元素要保持一致,合并单元格必须是一个完整的矩形

### 错误示例

```css
a {
  grid-template-areas: "";
}
a {
  grid-template-areas:
    "a a a"
    "b b b b";
}
a {
  grid-template-areas:
    "a a a"
    "b b a";
}
```

### 正确示例

```css
a {
  grid-template-areas:
    "a a a"
    "b b b";
}
```

## 参考

- [named-grid-areas-no-invalid](https://stylelint.io/user-guide/rules/list/named-grid-areas-no-invalid)
