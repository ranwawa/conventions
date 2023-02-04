# 禁止出现重复的字体

## Why?

> 重复的字体无实际意义,直接删除掉即可

## bad

```css
a {
  font-family: "Times", Times, serif;
}
```

## good

```css
a {
  font-family: Times, serif;
}
```

## 参考

- [font-family-no-duplicate-names](https://stylelint.io/user-guide/rules/list/font-family-no-duplicate-names)
