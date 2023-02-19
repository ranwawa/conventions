# media-feature-name-no-unknown

禁止非法的媒体类型属性

### 为什么?

当然是语法错误,请参照文档修改

### 错误示例

```css
@media screen and (unknown > 10px) {
}
```

### 正确示例

```css
@media screen and (min-width > 10px) {
}
```

## 参考

- [media-feature-name-no-unknown](https://stylelint.io/user-guide/rules/list/media-feature-name-no-unknown)
- [media-features mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features)
