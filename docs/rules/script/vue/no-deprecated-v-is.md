# vue/no-deprecated-v-is

禁止使用已废弃的`v-is`指令

### 为什么

在Vue.js 3.1.0+版本中，`v-is`指令已被废弃。

### 建议

使用带有`vue:`前缀的`is`属性代替。

### 错误示例

```vue
<template>
  <div v-is="'zhangshan'" />
</template>
```

### 正确示例

```vue
<template>
  <div is="vue:zhangshan" />
</template>
```

### 参考

- [vue/no-deprecated-v-is](https://eslint.vuejs.org/rules/no-deprecated-v-is.html)
