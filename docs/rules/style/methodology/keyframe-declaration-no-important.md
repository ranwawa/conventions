# keyframe-declaration-no-important

禁止在桢中使用 important 标记

### 为什么?

桢中的 important 标记会被部分浏览器忽略,因此会产生浏览器兼容性问题,请删除

### 错误示例

```css
@keyframes foo {
  from {
    opacity: 0 !important;
  }
}
```

### 正确示例

```css
@keyframes foo {
  from {
    opacity: 0;
  }
}
```

## 参考

- [keyframe-declaration-no-important](https://stylelint.io/user-guide/rules/list/keyframe-declaration-no-important)
