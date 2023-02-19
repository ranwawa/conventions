# number-max-precision

禁止小数值超过 2 位数

### 为什么?

多了没用,肉眼可识别的精度没那么高,统一风格

### 错误示例

```scss
a {
  top: 3.245634px;
}
```

### 正确示例

```scss
a {
  top: 3.24px;
}
```

## 参考

- [number-max-precision](https://stylelint.io/user-guide/rules/list/number-max-precision)
