# annotation-no-unknown

禁止出现未知的权重标记

### 为什么?

防止打错字导致样式失效,已知的权限标记`important`.请检查是否输入错误.

### 错误示例

```css
.name {
  color: green !important2;
}
```

### 正确示例

```css
a {
  color: green !important;
}
```

## 参考

- [annotation-no-unknown](https://stylelint.io/user-guide/rules/list/annotation-no-unknown)
