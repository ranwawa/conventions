# vue/mustache-interpolation-spacing

必须在mustache插值中统一空格

### 为什么

强制统一风格,提升代码的可维护性。

### 建议

在花括号和表达式之间保持一个空格。

### 错误示例

```vue
<template>
  <div>{{text}}</div>
</template>
```

### 正确示例

```vue
<template>
  <div>{{ text }}</div>
</template>
```

### 参考

- [vue/mustache-interpolation-spacing](https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html)