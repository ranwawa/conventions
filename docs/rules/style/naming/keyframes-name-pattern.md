# 必须使用小写烤串风格命名动画名

## Why?

> css 大小写不敏感,统一风格

## bad

```scss
@keyframes FOO-bar {
}
```

## good

```scss
@keyframes foo-bar {
}
```

## 参考

- [keyframes-name-pattern](https://stylelint.io/user-guide/rules/list/keyframes-name-pattern)
