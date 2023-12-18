# vue/no-v-html

禁止使用v-html

### 为什么

使用v-html有可能引发XSS攻击，因为它可能会将不安全/未转义的HTML注入到浏览器中。

### 建议

使用插值表达式替代v-html

### 错误示例

```vue
<template>
  <div v-html="ranwawa"></div>
</template>
```

### 正确示例

```vue
<template>
  <div>{{ ranwawa }}</div>
</template>
```

### 参考

- [vue/no-v-html](https://eslint.vuejs.org/rules/no-v-html.html)
