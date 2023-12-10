# vue/require-component-is

必须在`<component>`元素中使用`v-bind:is`

### 为什么

确保动态组件正确使用。

### 建议

在`<component>`元素中使用`v-bind:is`属性。

### 错误示例

```vue
<template>
  <component />
  <component is="type" />
</template>
```

### 正确示例

```vue
<template>
  <component :is="type" />
</template>
```

### 参考

- [vue/require-component-is](https://eslint.vuejs.org/rules/require-component-is.html)
