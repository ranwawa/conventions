# vue/valid-v-bind

必须使用有效的`v-bind`指令

### 为什么

无效的指令不会产生任何影响, 但是会导致语法错误。

### 建议

确保`v-bind`指令有属性值，并且没有无效的修饰符。

### 错误示例

```vue
<template>
  <div v-bind:aaa.bbb="foo" />
</template>
```

### 正确示例

```vue
<template>
  <div :aaa="foo" />
</template>
```

### 参考

- [vue/valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html)
