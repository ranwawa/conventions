# 必须在自定义属性前换行

## Why?

> 统一风格并且方便识别出自定义属性

## bad

```scss
a {
  top: 10px;
  --foo: pink;
  --bar: red;
}
```

## good

```scss
a {
  top: 10px;

  --foo: pink;
  --bar: red;
}
```

## 参考

- [custom-property-empty-line-before](https://stylelint.io/user-guide/rules/list/custom-property-empty-line-before)
