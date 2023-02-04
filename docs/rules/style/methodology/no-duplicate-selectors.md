# 禁止使用重复的选择器

## Why?

> 后面出现的选择器会直接覆盖前面的选择器,可阅读性差,请把两个选择器整合到一起

## bad

```css
.foo {
}
.bar {
}
.foo {
}
```

## good

```css
.foo {
}
.bar {
}
```

## 参考

- [no-duplicate-selectors](https://stylelint.io/user-guide/rules/list/no-duplicate-selectors)
