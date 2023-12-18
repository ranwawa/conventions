# vue/component-tags-order

组件顶级元素顺序必须为template, script, style

### 为什么

按照统一的顺序来组织代码,有利于提高可读性。

### 建议

按照`<template>`，`<script>`，`<style>`的顺序排列组件的顶级元素。

### 错误示例

```vue
<script>
/* ... */
</script>
<template>...</template>
<style>
/* ... */
</style>
```

### 正确示例

```vue
<template>...</template>
<script>
/* ... */
</script>
<style>
/* ... */
</style>
```

### 参考

- [vue/component-tags-order](https://eslint.vuejs.org/rules/component-tags-order.html)
