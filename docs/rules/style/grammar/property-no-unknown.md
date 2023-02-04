# 禁止非法的属性名

## Why?

> 语法错误会导致浏览器无法渲染,请修改成正确的

## bad

```css
a {
  colr: blue;
}
```

## good

```css
a {
  color: blue;
}
```

## 参考

- [property-no-unknown](https://stylelint.io/user-guide/rules/list/property-no-unknown)
