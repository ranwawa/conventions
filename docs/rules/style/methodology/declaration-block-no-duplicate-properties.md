# 禁止声明使用重复的属性

## Why?

> 后面属性会覆盖前面属性的值,一般是因为内容过多重复声明导致,请删除不用的那个.使用不同的值进行浏览器回退不会报错.

## bad

```css
a {
  color: orange;
}
```

## good

```css
a {
  color: pink;
}
```

## 参考

- [declaration-block-no-duplicate-properties](https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-properties)
