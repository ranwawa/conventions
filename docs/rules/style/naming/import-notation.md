# 必须使用字符串形式引入外部资源

## Why?

> 禁止用 url 形式引入,统一风格

## bad

```scss
@import url("foo.css");
```

## good

```scss
@import "foo.css";
```

## 参考

- [import-notation](https://stylelint.io/user-guide/rules/list/)
