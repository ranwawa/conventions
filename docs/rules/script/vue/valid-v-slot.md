# vue/valid-v-slot

`v-slot`指令必须有效

### 为什么

slot只能用在自定义组件上

### 建议

确保`v-slot`指令的使用符合Vue的规范。

### 错误示例

```vue
<template>
  <div v-slot="data">
    {{ data }}
  </div>
</template>
```

### 正确示例

```vue
<template>
  <my-component v-slot="data">
    {{ data }}
  </my-component>
</template>
```

### 参考

- [vue/valid-v-slot](https://eslint.vuejs.org/rules/valid-v-slot.html)
