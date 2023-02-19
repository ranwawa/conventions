# no-duplicate-selectors

禁止使用重复的选择器

### 为什么?

后面出现的选择器会直接覆盖前面的选择器,可阅读性差,请把两个选择器整合到一起

### 错误示例

```css
.foo {
}
.bar {
}
.foo {
}
```

### 正确示例

```css
.foo {
}
.bar {
}
```

## 参考

- [no-duplicate-selectors](https://stylelint.io/user-guide/rules/list/no-duplicate-selectors)
