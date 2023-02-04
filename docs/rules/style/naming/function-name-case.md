# 必须使用小写形式的函数

## Why?

> css 是大小写不敏感语言,统一风格使用小写

## bad

```scss
a {
  width: CALC(5% - 10em);
}
```

## good

```scss
a {
  width: calc(5% - 10em);
}
```

## 参考

- [function-name-case](https://stylelint.io/user-guide/rules/list/function-name-case)
