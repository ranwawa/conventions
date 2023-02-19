# color-function-notation

必须使用空格作为颜色函数的分隔符

### 为什么?

`CSS Colors Level 4`允许空格作为颜色函数的分隔符,为了和 padding,margin 等语法保持一致,统一使用空格作为分隔符

### 错误示例

```scss
a {
  color: rgba(0, 0, 0 / 0.2);
}
```

### 正确示例

```scss
a {
  color: rgba(0 0 0 / 0.2);
}
```

## 参考

- [color-function-notation](https://stylelint.io/user-guide/rules/list/color-function-notation)
