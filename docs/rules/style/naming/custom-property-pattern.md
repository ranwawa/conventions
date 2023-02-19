# custom-property-pattern

必须使用烤串风格命名自定义属性

### 为什么?

同上

### 错误示例

```scss
:root {
  --Bar: 0;
}
```

### 正确示例

```scss
:root {
  --bar: 0;
}
```

## 参考

- [custom-property-pattern](https://stylelint.io/user-guide/rules/list/custom-property-pattern)
