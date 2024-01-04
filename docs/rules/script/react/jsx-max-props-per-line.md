# react/jsx-max-props-per-line

多行属性每行最多只能有一个属性

### 为什么

统一风格

### 建议

使用prettier进行自动格式化

### 错误示例

```jsx
<Hello
  lastName="zhangshan" firstName="lisi"
  data-age={18}
  data-gender="male"
  data-address="shanghai"
/>
```

### 正确示例

```jsx
<Hello
  lastName="zhangshan"
  firstName="lisi"
  data-age={18}
  data-gender="male"
  data-address="shanghai"
/>
```

### 参考

- [react/jsx-max-props-per-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md)
