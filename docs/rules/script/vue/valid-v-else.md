# vue/valid-v-else

必须将`v-else`放在最后

### 为什么

语法常识

### 建议

确保`v-else`指令没有参数、修饰符、属性值，并且前一个元素有`v-if`或`v-else-if`指令。

### 错误示例

```vue
<template>
  <!-- 错误 -->
  <div v-else />
  <div v-if="foo" />
  >
</template>
```

### 正确示例

```vue
<template>
  <!-- 正确 -->
  <div v-if="foo" />
  <div v-else />
</template>
```

### 参考

- [vue/valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html)
