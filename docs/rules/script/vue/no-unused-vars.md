# vue/no-unused-vars

禁止未使用的v-for指令或作用域属性的变量定义

### 为什么

如果v-for指令或作用域属性的变量定义没有被使用，那声明它做什么呢。

### 建议

确保v-for指令或作用域属性的变量在模板中被使用。

### 错误示例

```vue
<template>
  <ol v-for="i in 5">
    <li>ranwawa</li>
  </ol>
</template>
```

### 正确示例

```vue
<template>
  <ol v-for="i in 5">
    <li>{{ i }}</li>
  </ol>
</template>
```

### 参考

- [vue/no-unused-vars](https://eslint.vuejs.org/rules/no-unused-vars.html)
