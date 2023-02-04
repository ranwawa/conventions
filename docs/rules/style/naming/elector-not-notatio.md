# 禁止使用链式的:not 选择器

## Why?

> `Selectors Level 4`已经允许在:not 选择器中使用复杂表达式,请使用新的方式排除部分选择器

## bad

```scss
:not(a):not(div) {
}
```

## good

```scss
:not(a, div) {
}
```

## 参考

- [elector-not-notatio](https://stylelint.io/user-guide/rules/list/elector-not-notatio)
