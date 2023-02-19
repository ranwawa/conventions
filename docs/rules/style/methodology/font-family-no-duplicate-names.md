# font-family-no-duplicate-names

禁止出现重复的字体

### 为什么?

重复的字体无实际意义,直接删除掉即可

### 错误示例

```css
a {
  font-family: "Times", Times, serif;
}
```

### 正确示例

```css
a {
  font-family: Times, serif;
}
```

## 参考

- [font-family-no-duplicate-names](https://stylelint.io/user-guide/rules/list/font-family-no-duplicate-names)
