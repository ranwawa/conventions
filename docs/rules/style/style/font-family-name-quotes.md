# font-family-name-quotes

必须在字体两边加上引号

### 为什么?

统一风格,除了内置关键字以外都加上引号

### 错误示例

```scss
a {
  font-family: Times New Roman, Times, serif;
}
```

### 正确示例

```scss
a {
  font-family: "Times New Roman", Times, serif;
}
```

## 参考

- [font-family-name-quotes](https://stylelint.io/user-guide/rules/list/font-family-name-quotes)
