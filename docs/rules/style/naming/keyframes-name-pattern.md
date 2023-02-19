# keyframes-name-pattern

必须使用小写烤串风格命名动画名

### 为什么?

css 大小写不敏感,统一风格

### 错误示例

```scss
@keyframes FOO-bar {
}
```

### 正确示例

```scss
@keyframes foo-bar {
}
```

## 参考

- [keyframes-name-pattern](https://stylelint.io/user-guide/rules/list/keyframes-name-pattern)
