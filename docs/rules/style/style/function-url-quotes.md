# function-url-quotes

必须使用引号将 url 函数参数包起来

### 为什么?

统一风格

### 错误示例

```scss
a {
  background: url(x.jpg);
}
```

### 正确示例

```scss
a {
  background: url("x.jpg");
}
```

## 参考

- [function-url-quotes](https://stylelint.io/user-guide/rules/list/function-url-quotes)
