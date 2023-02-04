# 禁止出现非法空格

## Why?

> 非法空格看上去和空格一样,但实际上不是真正的空格,会导致 css 样式失效,请使用正常的空格

## bad

```css
/* 下面这个空格看上去没什么不一样,实际上有大问题 */
.a .b {
}
```

## good

```css
.a .b {
}
```

## 参考

- [no-irregular-whitespace](https://stylelint.io/user-guide/rules/list/no-irregular-whitespace)
