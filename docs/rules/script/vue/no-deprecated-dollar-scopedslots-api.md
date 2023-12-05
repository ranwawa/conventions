# vue/no-deprecated-dollar-scopedslots-api

禁止使用已废弃的`$scopedSlots` (在Vue.js 3.0.0+中)

### 为什么

在Vue.js 3.0.0+中，`$scopedSlots`已被废弃，继续使用可能会导致代码出错。

### 建议

使用新的插槽API替换`$scopedSlots`。

### 错误示例

```vue
<template>
  <div v-if="$scopedSlots.default"><slot /></div>
</template>
<script>
export default {
  render() {
    return this.$scopedSlots.default();
  }
};
</script>
```

### 正确示例

```vue
<template>
  <div v-if="$slots.default"><slot /></div>
</template>
<script>
export default {
  render() {
    return this.$slots.default();
  }
};
</script>
```

### 参考

- [vue/no-deprecated-dollar-scopedslots-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html)
