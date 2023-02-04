# 禁止非法的伪节点选择器

## Why?

> 语法错误,请修改成正确的

## bad

```css
a::middle {
}
```

## good

```css
a::before {
}
```

## 参考

- [selector-pseudo-element-no-unknown](https://stylelint.io/user-guide/rules/list/selector-pseudo-element-no-unknown)
