# string-no-newline

必须使用转义字符换行

### 为什么?

语法错误

### 错误示例

```css
a {
  content: "first
  second";
}
```

### 正确示例

```css
a {
  content: "first\\nsecond";
}
```

## 参考

- [string-no-newline](https://stylelint.io/user-guide/rules/list/string-no-newline)
