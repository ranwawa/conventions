# keyframe-selector-notation

必须使用百分比表示动画帧选择器

### 为什么?

from/to 可以表示 0%/100%,但不能表示中间状态,统一风格使用百分比

### 错误示例

```scss
@keyframes foo {
  from {
  }
  to {
  }
}
```

### 正确示例

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
