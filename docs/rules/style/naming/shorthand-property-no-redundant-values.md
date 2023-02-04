# 禁止使用多余的简写属性

## Why?

> 既然已经简写了,那就去掉多余的部分

## bad

```scss
a {
  margin: 1px 1px;
}
```

## good

```scss
a {
  margin: 1px;
}
```

## 参考

- [shorthand-property-no-redundant-values](https://stylelint.io/user-guide/rules/list/shorthand-property-no-redundant-values)
