# vue/v-on-style

强制使用`@`指令的样式

### 为什么

统一使用`v-on`指令的简写形式，以保持代码的一致性和可读性。

### 建议

选择使用简写形式`@`。

### 错误示例

```vue
<template>
  <div v-on:click="foo" />
</template>
```

### 正确示例

```vue
<template>
  <div @click="foo" />
</template>
```

### 参考

- [vue/v-on-style](https://eslint.vuejs.org/rules/v-on-style.html)
