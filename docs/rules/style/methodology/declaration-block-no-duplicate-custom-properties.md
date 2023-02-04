# 禁止声明重复的自定义变量

## Why?

> 后面的变量会覆盖前面变量的值,为了防止覆盖请使用新的变量名

## bad

```css
:root {
  --foo: red;
  --foo: green;
}
```

## good

```css
:root {
  --foo: red;
  --bar: green;
}
```

## 参考

- [declaration-block-no-duplicate-custom-properties](https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-custom-properties)
