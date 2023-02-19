# property-no-unknown

禁止非法的属性名

### 为什么?

语法错误会导致浏览器无法渲染,请修改成正确的

### 错误示例

```css
a {
  colr: blue;
}
```

### 正确示例

```css
a {
  color: blue;
}
```

## 参考

- [property-no-unknown](https://stylelint.io/user-guide/rules/list/property-no-unknown)
