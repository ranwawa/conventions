# vue/valid-v-if

`v-if`指令必须有效

### 为什么

这个规则检查每个`v-if`指令是否有效，无效的`v-if`指令会导致预期之外的行为。

### 建议

确保`v-if`指令没有参数，没有修饰符，有属性值，并且不在有`v-else`/`v-else-if`指令的元素上。

### 错误示例

```vue
<template>
  <div v-if />
</template>
```

### 正确示例

```vue
<template>
  <div v-if="foo" />
</template>
```

### 参考

- [vue/valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html)
