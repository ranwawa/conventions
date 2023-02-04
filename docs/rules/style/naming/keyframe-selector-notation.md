# 必须使用百分比表示动画帧选择器

## Why?

> from/to 可以表示 0%/100%,但不能表示中间状态,统一风格使用百分比

## bad

```scss
@keyframes foo {
  from {
  }
  to {
  }
}
```

## good

```scss
@keyframes foo {
  0% {
  }
  100% {
  }
}
```

## 参考

- [keyframe-selector-notation](https://stylelint.io/user-guide/rules/list/keyframe-selector-notation)
