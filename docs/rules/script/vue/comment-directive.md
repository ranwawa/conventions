# vue/comment-directive

支持在`<template>`中使用注释指令

### 为什么

这条规则的唯一目的是在`<template>`和块级别中提供`eslint-disable`功能。

### 建议

在需要关闭某些eslint规则的地方使用`eslint-disable`注释。

### 错误示例

<eslint-code-block :rules="{'vue/comment-directive': ['error'], 'vue/max-attributes-per-line': ['error']}">
```vue
<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div a="1" />
</template>
```
</eslint-code-block>

### 正确示例

```vue
<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div a="1" b="2" c="3" d="4" />
</template>
```

### 参考

- [vue/comment-directive](https://eslint.vuejs.org/rules/comment-directive.html)
