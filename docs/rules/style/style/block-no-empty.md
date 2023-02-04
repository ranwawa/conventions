# 禁止使用空的样式块

## Why?

> 空的样式块没有存在的意义,请删除空块或在块里面添加注释

## bad

```css
a {
}
```

## good

```css
a {
  // balabalabala
}
```

## 参考

- [block-no-empty](https://stylelint.io/user-guide/rules/list/block-no-empty)
