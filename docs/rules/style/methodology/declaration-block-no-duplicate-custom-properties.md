# declaration-block-no-duplicate-custom-properties

禁止声明重复的自定义变量

### 为什么?

后面的变量会覆盖前面变量的值,为了防止覆盖请使用新的变量名

### 错误示例

```css
:root {
  --foo: red;
  --foo: green;
}
```

### 正确示例

```css
:root {
  --foo: red;
  --bar: green;
}
```

## 参考

- [declaration-block-no-duplicate-custom-properties](https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-custom-properties)
