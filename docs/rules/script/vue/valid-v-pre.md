# vue/valid-v-pre

必须使用有效的`v-pre`指令

### 为什么

这条规则用来检查每个`v-pre`指令是否有效。

### 建议

不要给`v-pre`指令添加参数、修饰符或属性值。

### 错误示例

```vue
<template>
  <div v-pre:aaa />
</template>
```

### 正确示例

```vue
<template>
  <div v-pre />
</template>
```

### 参考

- [vue/valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html)
