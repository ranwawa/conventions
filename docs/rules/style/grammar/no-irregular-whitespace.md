# no-irregular-whitespace

禁止出现非法空格

### 为什么?

非法空格看上去和空格一样,但实际上不是真正的空格,会导致 css 样式失效,请使用正常的空格

### 错误示例

```css
/* 下面这个空格看上去没什么不一样,实际上有大问题 */
.a .b {
}
```

### 正确示例

```css
.a .b {
}
```

## 参考

- [no-irregular-whitespace](https://stylelint.io/user-guide/rules/list/no-irregular-whitespace)
