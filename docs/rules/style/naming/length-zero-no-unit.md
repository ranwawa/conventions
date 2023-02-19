# length-zero-no-unit

禁止给 0 值带上单位

### 为什么?

0 的单位没有实际意义,减少字符输入,统一风格

### 错误示例

```scss
a {
  top: 0px;
}
```

### 正确示例

```scss
a {
  top: 0;
}
```

## 参考

- [length-zero-no-unit](https://stylelint.io/user-guide/rules/list/length-zero-no-unit)
