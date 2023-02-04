# 禁止给 0 值带上单位

## Why?

> 0 的单位没有实际意义,减少字符输入,统一风格

## bad

```scss
a {
  top: 0px;
}
```

## good

```scss
a {
  top: 0;
}
```

## 参考

- [length-zero-no-unit](https://stylelint.io/user-guide/rules/list/length-zero-no-unit)
