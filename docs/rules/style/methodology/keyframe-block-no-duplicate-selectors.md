# keyframe-block-no-duplicate-selectors

禁止出现重复的桢

### 为什么?

后面桢会覆盖前面桢的值,请删除重复的桢

### 错误示例

```css
@keyframes foo {
  0% {
  }
  0% {
  }
  100% {
  }
}
```

### 正确示例

```css
@keyframes foo {
  0% {
  }
  100% {
  }
}
```

## 参考

- [keyframe-block-no-duplicate-selectors](https://stylelint.io/user-guide/rules/list/keyframe-block-no-duplicate-selectors)
