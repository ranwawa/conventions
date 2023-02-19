# function-name-case

必须使用小写形式的函数

### 为什么?

css 是大小写不敏感语言,统一风格使用小写

### 错误示例

```scss
a {
  width: CALC(5% - 10em);
}
```

### 正确示例

```scss
a {
  width: calc(5% - 10em);
}
```

## 参考

- [function-name-case](https://stylelint.io/user-guide/rules/list/function-name-case)
