# vue/v-slot-style

必须使用v-slot指令的长格式

### 为什么

统一使用v-slot指令的长格式或短格式，以保持代码的一致性和可读性。

### 建议

将v-slot指令的短格式改为长格式。

### 错误示例

```vue
<template>
  <my-component #default="data">
    {{ data }}
  </my-component>
</template>
```

### 正确示例

```vue
<template>
  <my-component v-slot:default="data">
    {{ data }}
  </my-component>
</template>
```

### 参考

- [vue/v-slot-style](https://eslint.vuejs.org/rules/v-slot-style.html)
