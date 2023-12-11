# vue/valid-v-memo

必须使用有效的`v-memo`指令

### 为什么

这条规则检查每个`v-memo`指令是否有效，以确保代码的正确性。

### 建议

避免出现参数、修饰符、属性值错误或者在v-for内部使用。

### 错误示例

```vue
<template>
  <div v-memo:aaa="[x]" />
</template>
```

### 正确示例

```vue
<template>
  <div v-memo="[x]" />
</template>
```

### 参考

- [vue/valid-v-memo](https://eslint.vuejs.org/rules/valid-v-memo.html)
