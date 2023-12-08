# vue/no-v-text-v-html-on-component

禁止在组件上使用v-text/v-html

### 为什么

在组件上使用v-text/v-html会覆盖组件的内容，会破坏组件。

### 建议

在div上使用v-text/v-htm,或者是在组件里面使用插值表达式。

### 错误示例

```vue
<template>
  <MyComponent v-text="content"></MyComponent>
</template>
```

### 正确示例

```vue
<template>
  <div v-text="content"></div>
  <MyComponent>{{ content }}</MyComponent>
</template>
```

### 参考

- [vue/no-v-text-v-html-on-component](https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html)
