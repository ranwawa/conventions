# vue/no-deprecated-v-on-native-modifier

禁止使用已废弃的`.native`修饰符

### 为什么

在Vue.js 3.0.0+中，`.native`修饰符已被废弃，继续使用可能会导致代码出现错误。

### 建议

将`.native`修饰符替换为其他有效的修饰符。

### 错误示例

```vue
<template>
  <CoolInput @keydown.enter.native="onKeydownEnter" />
</template>
```

### 正确示例

```vue
<template>
  <CoolInput @keydown.enter="onKeydownEnter" />
</template>
```

### 参考

- [vue/no-deprecated-v-on-native-modifier](https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html)
