# color-no-invalid-hex

禁止非法的 16 进制颜色

### 为什么?

16 进制分 6/8 以及简写形式 3/4 长度.请检查是否输入错误.

### 错误示例

```css
a {
  color: #00;
}
a {
  color: #0000000;
}
```

### 正确示例

```css
a {
  color: #000;
}
a {
  color: #0000;
}
```

## 参考

- [color-no-invalid-hex](https://stylelint.io/user-guide/rules/list/color-no-invalid-hex)
