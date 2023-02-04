# 禁止在属性名前加浏览器前缀

## Why?

> 插件会自动处理,统一风格,请删除掉

## bad

```scss
a {
  -webkit-transform: scale(1);
}
```

## good

```scss
a {
  transform: scale(1);
}
```

## 参考

- [property-no-vendor-prefix](https://stylelint.io/user-guide/rules/list/property-no-vendor-prefix)
