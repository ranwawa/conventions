# no-duplicate-at-import-rules

禁止引入重复的外部样式

### 为什么?

重复的就是多余的.请删掉.

### 错误示例

```css
@import "a.css";
@import "a.css";
```

### 正确示例

```css
@import "a.css";
```

## 参考

- [no-duplicate-at-import-rules](https://stylelint.io/user-guide/rules/list/no-duplicate-at-import-rules)
- [@import mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)
