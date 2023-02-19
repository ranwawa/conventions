# property-no-vendor-prefix

禁止在属性名前加浏览器前缀

### 为什么?

插件会自动处理,统一风格,请删除掉

### 错误示例

```scss
a {
  -webkit-transform: scale(1);
}
```

### 正确示例

```scss
a {
  transform: scale(1);
}
```

## 参考

- [property-no-vendor-prefix](https://stylelint.io/user-guide/rules/list/property-no-vendor-prefix)
