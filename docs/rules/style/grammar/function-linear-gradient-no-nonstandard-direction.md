# function-linear-gradient-no-nonstandard-direction

禁止出现非法的渐变方向值

### 为什么?

方向值有角度和固定值,写错了当然是要报错的嘛,请参照官方文档修改正确的值

### 错误示例

```css
.foo {
  background: linear-gradient(top, #fff, #000);
}
```

### 正确示例

```css
.foo {
  background: linear-gradient(to top, #fff, #000);
}
```

## 参考

- [function-linear-gradient-no-nonstandard-direction](https://stylelint.io/user-guide/rules/list/function-linear-gradient-no-nonstandard-direction)
