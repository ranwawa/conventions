# vue/no-deprecated-v-on-number-modifiers

禁止使用已废弃的数字（键码）修饰符

### 为什么

在Vue.js 3.0.0+中，`KeyboardEvent.keyCode`修饰符在`v-on`指令上已被废弃。

### 建议

使用`KeyboardEvent.key`代替`KeyboardEvent.keyCode`。

### 错误示例

```vue
<template>
  <input @keyup.34="onArrowUp" />
</template>
```

### 正确示例

```vue
<template>
  <input @keyup.9="onArrowUp" />
</template>
```

### 参考

- [vue/no-deprecated-v-on-number-modifiers](https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html)
