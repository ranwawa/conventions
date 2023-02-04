# 必须包含通用字体

## Why?

> 如果自定义字体无法访问则会回退到浏览器通用字体,通用字体关键字放在末尾并且不能加引号

## bad

```css
a {
  font-family: Helvetica, Arial, Verdana, Tahoma;
}
```

## good

```css
a {
  font-family: Helvetica, Arial, Verdana, Tahoma, sans-serif;
}
```

## 参考

- [font-family-no-missing-generic-family-keyword](https://stylelint.io/user-guide/rules/list/font-family-no-missing-generic-family-keyword)
- [font-family mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
