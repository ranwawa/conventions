# 必须使用数字表示百分比

## Why?

> 从蓝湖和 figma 上拷贝过来的都是数值,统一风格都使用小数形式,请将百分比形式转换成小数形式

## bad

```css
a {
  color: rgb(0 0 0 / 50%);
}
```

## good

```css
a {
  color: rgb(0 0 0 / 0.5);
}
```

## 参考

- [alpha-value-notation](https://stylelint.io/user-guide/rules/list/alpha-value-notation)
