# vue/v-bind-style

必须使用`v-bind`指令的简写形式

### 为什么

统一使用`v-bind`指令的简写形式，这样可以保持代码的一致性和可读性。

### 建议

使用`v-bind`指令的简写形式。

### 错误示例

```vue
<template>
  <div v-bind:foo="bar" />
</template>
```

### 正确示例

```vue
<template>
  <div :foo="bar" />
</template>
```

### 参考

- [vue/v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)
