# no-descending-specificity

禁止低权重选择器出现在高权重选择器后面

### 为什么?

在 CSS 中后出现的规则会覆盖前面出现的规则,但是如果后出现的规则权重没有前面规则的权重高,则无法覆盖.请把权重的选择器放前面

### 错误示例

```css
b a {
}
a {
}
```

### 正确示例

```css
a {
}
b a {
}
```

## 参考

- [no-descending-specificity](https://stylelint.io/user-guide/rules/list/no-descending-specificity)
