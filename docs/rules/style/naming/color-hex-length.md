# 必须使用简写形式表达 16 进制颜色

## Why?

> 16 进制颜色同个部分颜色相同可以缩写,为了统一风格和减少输入量,统一使用简写形式

## bad

```scss
a {
  color: #fffff;
}
```

## good

```scss
a {
  color: #ff;
}
```

## 参考

- [color-hex-length](https://stylelint.io/user-guide/rules/list/color-hex-length)
