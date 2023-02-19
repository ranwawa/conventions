# selector-no-vendor-prefix

禁止在选择器前使用浏览器前缀

### 为什么?

插件会自动处理,请删除

### 错误示例

```scss
input::-moz-placeholder {
}
```

### 正确示例

```scss
input::placeholder {
}
```

## 参考

- [selector-no-vendor-prefix](https://stylelint.io/user-guide/rules/list/selector-no-vendor-prefix)
