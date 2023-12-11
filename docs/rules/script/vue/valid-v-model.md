# vue/valid-v-model

必须使用有效的`v-model`指令

### 为什么

这条规则检查每个`v-model`指令是否有效，以确保数据绑定的正确性。

### 建议

确保`v-model`指令的使用符合Vue的语法规则。

### 错误示例

```vue
<template>
  <input v-model />
</template>
```

### 正确示例

```vue
<template>
  <input v-model="foo" />
</template>
```

### 参考

- [vue/valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html)
