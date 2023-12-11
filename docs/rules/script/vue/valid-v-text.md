# vue/valid-v-text

强制使用有效的`v-text`指令

### 为什么

必须包含内容,并且不能携带参数和修改符

### 建议

确保`v-text`指令没有参数、修饰符，并且有属性值。

### 错误示例

```vue
<template>
  <div v-text />
</template>
```

### 正确示例

```vue
<template>
  <div v-text="foo" />
</template>
```

### 参考

- [vue/valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html)
