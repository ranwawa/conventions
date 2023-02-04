# 禁止出现非法的渐变方向值

## Why?

> 方向值有角度和固定值,写错了当然是要报错的嘛,请参照官方文档修改正确的值

## bad

```css
.foo {
  background: linear-gradient(top, #fff, #000);
}
```

## good

```css
.foo {
  background: linear-gradient(to top, #fff, #000);
}
```

## 参考

- [function-linear-gradient-no-nonstandard-direction](https://stylelint.io/user-guide/rules/list/function-linear-gradient-no-nonstandard-direction)
