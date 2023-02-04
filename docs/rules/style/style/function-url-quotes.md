# 必须使用引号将 url 函数参数包起来

## Why?

> 统一风格

## bad

```scss
a {
  background: url(x.jpg);
}
```

## good

```scss
a {
  background: url("x.jpg");
}
```

## 参考

- [function-url-quotes](https://stylelint.io/user-guide/rules/list/function-url-quotes)
