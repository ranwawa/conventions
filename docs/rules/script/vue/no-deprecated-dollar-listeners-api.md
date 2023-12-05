# vue/no-deprecated-dollar-listeners-api

禁止使用已废弃的`$listeners`

### 为什么

在Vue.js 3.0.0+版本中，`$listeners`已被废弃。

### 建议

不要使用`$listeners`，按照Vue.js 3.0.0+的新规则进行修改。

### 错误示例

```vue
<template>
  <MyInput v-on="$listeners">
</template>
<script>
export default {
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input() { /* */ }
      }
    }
  }
}
</script>
```

### 正确示例

此规则没有明确的正确示例，因为它只是禁止使用已废弃的`$listeners`。

### 参考

- [vue/no-deprecated-dollar-listeners-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html)
