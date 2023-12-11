# vue/valid-v-once

必须使用有效的`v-once`指令

### 为什么

这条规则用来检查每一个`v-once`指令是否有效。

### 建议

不要在`v-once`指令中使用参数、修饰符或属性值。

### 错误示例

```vue
<template>
  <div v-once:aaa />
</template>
```

### 正确示例

```vue
<template>
  <div v-once />
</template>
```

### 参考

- [vue/valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html)
