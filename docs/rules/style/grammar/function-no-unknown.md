# 禁止使用非法的函数

## Why?

> 非法的函数明显无法生效,一般都是因为打错字导致的,请参考 mdn 文档进行修改

## bad

```css
a {
  transform: translation(1);
}
```

## good

```css
a {
  transform: translate(1);
}
```

## 参考

- [function-no-unknown](https://stylelint.io/user-guide/rules/list/function-no-unknown)
