# 必须在操作符两侧添加空格

## Why?

> 和 js 风格保持一致,便于代码阅读

## bad

```css
a {
  top: calc(1px+2px);
}
```

## good

```css
a {
  top: calc(1px + 2px);
}
```

## 参考

- [function-calc-no-unspaced-operator](https://stylelint.io/user-guide/rules/list/function-calc-no-unspaced-operator)
