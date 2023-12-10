# vue/valid-v-cloak

必须使用有效的`v-cloak`指令

### 为什么

无效的指令不会产生任何作用

### 建议

不要在`v-cloak`指令中使用参数、修饰符和属性值。

### 错误示例

```vue
<template>
  <div v-cloak:aaa />
</template>
```

### 正确示例

```vue
<template>
  <div v-cloak />
</template>
```

### 参考

- [vue/valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html)
