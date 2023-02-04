# 必须在字体两边加上引号

## Why?

> 统一风格,除了内置关键字以外都加上引号

## bad

```scss
a {
  font-family: Times New Roman, Times, serif;
}
```

## good

```scss
a {
  font-family: "Times New Roman", Times, serif;
}
```

## 参考

- [font-family-name-quotes](https://stylelint.io/user-guide/rules/list/font-family-name-quotes)
