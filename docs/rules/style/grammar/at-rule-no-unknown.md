# 禁止出现未知道的@规则

## Why?

> 防止打错字导致样式失效,已知的标记如: `@media` `@charset`.请检查输入是否错误

## bad

```css
@unknown {
}
```

## good

```css
@meida (max-width: 960px) {
}
```

## 参考

- [at-rule-no-unknown](https://stylelint.io/user-guide/rules/list/at-rule-no-unknown)
