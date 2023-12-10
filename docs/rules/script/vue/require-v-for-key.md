# vue/require-v-for-key

必须在`v-for`指令中使用`v-bind:key`

### 为什么

在`v-for`指令中使用`v-bind:key`可以提高Vue的渲染性能。

### 建议

在`v-for`指令中添加`v-bind:key`。

### 错误示例

```vue
<template>
  <div v-for="ranwawa in zhangshan" />
</template>
```

### 正确示例

```vue
<template>
  <div v-for="ranwawa in zhangshan" :key="ranwawa.id" />
</template>
```

### 参考

- [vue/require-v-for-key](https://eslint.vuejs.org/rules/require-v-for-key.html)
