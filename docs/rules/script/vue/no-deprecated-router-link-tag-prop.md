# vue/no-deprecated-router-link-tag-prop

禁止在`RouterLink`上使用已弃用的`tag`属性

### 为什么

这条规则是为了防止在`RouterLink`元素上使用已经在Vue.js v3.0.0+中被移除的`tag`属性。

### 建议

不要在`RouterLink`和`NuxtLink`组件上使用`tag`属性。

### 错误示例

```vue
<template>
  <RouterLink tag="div" to="/">Home</RouterLink>
  <router-link tag="div" to="/">Home</router-link>
</template>
```

### 正确示例

```vue
<template>
  <RouterLink to="/">Home</RouterLink>
  <router-link to="/">Home</router-link>
</template>
```

### 参考

- [vue/no-deprecated-router-link-tag-prop](https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html)
