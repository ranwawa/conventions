# 禁止在选择器前使用浏览器前缀

## Why?

> 插件会自动处理,请删除

## bad

```scss
input::-moz-placeholder {
}
```

## good

```scss
input::placeholder {
}
```

## 参考

- [selector-no-vendor-prefix](https://stylelint.io/user-guide/rules/list/selector-no-vendor-prefix)
