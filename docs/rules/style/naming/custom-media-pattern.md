# custom-media-pattern

必须使用烤串风格命令自定义媒体名

### 为什么?

统一风格,css 是大小写不敏感的语法,禁止出现大宝字母

### 错误示例

```scss
@custom-media Bar (min-width: 30em);
```

### 正确示例

```scss
@custom-media bar (min-width: 30em);
```

## 参考

- [custom-media-pattern](https://stylelint.io/user-guide/rules/list/custom-media-pattern)
