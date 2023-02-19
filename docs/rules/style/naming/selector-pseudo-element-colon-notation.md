# selector-pseudo-element-colon-notation

必须使用两个`:`标识伪类和伪节点

### 为什么?

虽然浏览器支持老的规范一个`:`,还是按照新规范统一下风格

### 错误示例

```scss
a:before {
  color: pink;
}
```

### 正确示例

```scss
a::before {
  color: pink;
}
```

## 参考

- [selector-pseudo-element-colon-notation](https://stylelint.io/user-guide/rules/list/selector-pseudo-element-colon-notation)
