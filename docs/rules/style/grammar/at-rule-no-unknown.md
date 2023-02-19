# at-rule-no-unknown

禁止出现未知道的@规则

### 为什么?

防止打错字导致样式失效,已知的标记如: `@media` `@charset`.请检查输入是否错误

### 错误示例

```css
@unknown {
}
```

### 正确示例

```css
@meida (max-width: 960px) {
}
```

## 参考

- [at-rule-no-unknown](https://stylelint.io/user-guide/rules/list/at-rule-no-unknown)
