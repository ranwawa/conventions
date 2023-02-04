# 禁止引入重复的外部样式

## Why?

> 重复的就是多余的.请删掉.

## bad

```css
@import "a.css";
@import "a.css";
```

## good

```css
@import "a.css";
```

## 参考

- [no-duplicate-at-import-rules](https://stylelint.io/user-guide/rules/list/no-duplicate-at-import-rules)
- [@import mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)
