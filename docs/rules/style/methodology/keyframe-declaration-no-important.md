# 禁止在桢中使用 important 标记

## Why?

> 桢中的 important 标记会被部分浏览器忽略,因此会产生浏览器兼容性问题,请删除

## bad

```css
@keyframes foo {
  from {
    opacity: 0 !important;
  }
}
```

## good

```css
@keyframes foo {
  from {
    opacity: 0;
  }
}
```

## 参考

- [keyframe-declaration-no-important](https://stylelint.io/user-guide/rules/list/keyframe-declaration-no-important)
