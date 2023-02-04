# 必须使用烤串风格命名自定义属性

## Why?

> 同上

## bad

```scss
:root {
  --Bar: 0;
}
```

## good

```scss
:root {
  --bar: 0;
}
```

## 参考

- [custom-property-pattern](https://stylelint.io/user-guide/rules/list/custom-property-pattern)
