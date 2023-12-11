# vue/valid-v-html

`v-html`指令必须有效

### 为什么

没有插入内容留着它过年吗难道要?

### 建议

确保`v-html`指令没有参数和修饰符,并且有属性值。

### 错误示例

```vue
<template>
  <div v-html />
</template>
```

### 正确示例

```vue
<template>
  <div v-html="foo" />
</template>
```

### 参考

- [vue/valid-v-html](https://eslint.vuejs.org/rules/valid-v-html.html)
