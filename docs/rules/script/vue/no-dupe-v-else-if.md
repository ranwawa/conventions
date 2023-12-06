# vue/no-dupe-v-else-if

禁止在`v-if` / `v-else-if`链中出现重复的条件

### 为什么

重复的条件会导致代码逻辑混乱，影响代码的可读性和可维护性。

### 建议

确保每个`v-if` / `v-else-if`链中的条件都是唯一的。

### 错误示例

```vue
<template>
  <div v-if="foo" />
  <div v-else-if="foo" />
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

- [vue/no-dupe-v-else-if](https://eslint.vuejs.org/rules/no-dupe-v-else-if.html)
