# 禁止在媒体特性前添加浏览器前缀

## Why?

> 浏览器前缀可以通过插件自动处理,不需要手动添加

## bad

```scss
@media (-webkit-min-device-pixel-ratio: 1) {
}
```

## good

```scss
@media (min-device-pixel-ratio: 1) {
}
```

## 参考

- [media-feature-name-no-vendor-prefix](https://stylelint.io/user-guide/rules/list/media-feature-name-no-vendor-prefix)
