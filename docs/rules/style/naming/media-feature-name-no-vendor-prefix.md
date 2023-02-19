# media-feature-name-no-vendor-prefix

禁止在媒体特性前添加浏览器前缀

### 为什么?

浏览器前缀可以通过插件自动处理,不需要手动添加

### 错误示例

```scss
@media (-webkit-min-device-pixel-ratio: 1) {
}
```

### 正确示例

```scss
@media (min-device-pixel-ratio: 1) {
}
```

## 参考

- [media-feature-name-no-vendor-prefix](https://stylelint.io/user-guide/rules/list/media-feature-name-no-vendor-prefix)
