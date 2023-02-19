# hue-degree-notation

必须使用`deg`表示颜色度数

### 为什么?

度数可以用数字,百分号,deg 进行表示,统一风格请使用 deg

### 错误示例

```scss
a {
  color: hsl(198 28% 50%);
}
```

### 正确示例

```scss
a {
  color: hsl(198deg 28% 50%);
}
```

## 参考

- [hue-degree-notation](https://stylelint.io/user-guide/rules/list/hue-degree-notation)
