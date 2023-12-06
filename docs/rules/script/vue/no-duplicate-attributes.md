# vue/no-duplicate-attributes

禁止属性重复

### 为什么

当一个组件上有多个同名属性时，只有最后一个会被使用，其余的都会被忽略。

### 建议

确保每个属性只出现一次

### 错误示例

```vue
<template>
  <MyComponent :foo="abc" foo="def" />
</template>
```

### 正确示例

```vue
<template>
  <MyComponent :foo="abc" />
</template>
```

### 参考

- [vue/no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)
