# vue/valid-v-for

`v-for`指令必须有效

### 为什么

必须遍历可以迭代的对象,必须指定`key`属性

### 建议

要不然在运行时就会报错

### 错误示例

```vue
<template>
  <div v-for />
</template>
```

### 正确示例

```vue
<template>
  <div v-for="item in list" :key="item.id" />
</template>
```

### 参考

- [vue/valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html)
