# vue/valid-v-else-if

必须将`else-if`放在`if`后面

### 为什么

语法常识~放在前面就不会生效了嘛

### 建议

确保`v-else-if`指令的使用正确。

### 错误示例

```vue
<template>
  <div />
  <div v-else-if="bar" />
  <div v-if="foo" />
</template>
```

### 正确示例

```vue
<template>
  <div v-if="foo" />
  <div v-else-if="bar" />
</template>
```

### 参考

- [vue/valid-v-else-if](https://eslint.vuejs.org/rules/valid-v-else-if.html)
