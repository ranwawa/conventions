# selector-pseudo-element-no-unknown

禁止非法的伪节点选择器

### 为什么?

语法错误,请修改成正确的

### 错误示例

```css
a::middle {
}
```

### 正确示例

```css
a::before {
}
```

## 参考

- [selector-pseudo-element-no-unknown](https://stylelint.io/user-guide/rules/list/selector-pseudo-element-no-unknown)
