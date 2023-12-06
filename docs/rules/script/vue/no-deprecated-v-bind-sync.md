# vue/no-deprecated-v-bind-sync

禁止在 `v-bind` 指令上使用已废弃的 `.sync` 修饰符 (在 Vue.js 3.0.0+)

### 为什么

Vue.js 3.0.0+ 中已经废弃了在 `v-bind` 指令上使用 `.sync` 修饰符。

### 建议

使用 `v-bind` 指令而不是 `.sync` 修饰符。

### 错误示例

```vue
<template>
  <MyComponent v-bind:propName.sync="foo" />
</template>
```

### 正确示例

```vue
<template>
  <MyComponent v-bind:propName="foo" />
</template>
```

### 参考

- [vue/no-deprecated-v-bind-sync](https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html)
