# declaration-block-no-shorthand-property-overrides

禁止简写属性覆盖完整属性

### 为什么?

明确的大于笼统的,明确的属性覆盖简写属性可以,但是反过来则容易产生 bug,请调整顺序把完整属性放在简写属性后面.

### 错误示例

```css
a {
  padding-left: 0;
  padding: 20px;
}
```

### 正确示例

```css
padding: 20px;
padding-left: 0;
```

## 参考

- [declaration-block-no-shorthand-property-overrides](https://stylelint.io/user-guide/rules/list/declaration-block-no-shorthand-property-overrides)
