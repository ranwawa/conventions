# 禁止出现重复的桢

## Why?

> 后面桢会覆盖前面桢的值,请删除重复的桢

## bad

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

## good

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
