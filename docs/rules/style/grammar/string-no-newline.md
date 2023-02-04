# 必须使用转义字符换行

## Why?

> 语法错误

## bad

```css
a {
  content: "first
  second";
}
```

## good

```css
a {
  content: "first\\nsecond";
}
```

## 参考

- [string-no-newline](https://stylelint.io/user-guide/rules/list/string-no-newline)
