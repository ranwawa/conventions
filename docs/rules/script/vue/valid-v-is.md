# vue/valid-v-is

`v-is`指令必须有效

### 为什么

v-is已经被废弃

### 建议

直接不要用v-is

### 错误示例

```vue
<template>
  <tr v-is:a="foo"></tr>
</template>
```

### 正确示例

```vue
<template>
  <tr v-is="'blog-post-row'"></tr>
</template>
```

### 参考

- [vue/valid-v-is](https://eslint.vuejs.org/rules/valid-v-is.html)
