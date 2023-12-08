# vue/no-v-for-template-key-on-child

禁止在子元素上放置`<template v-for>`的key值

### 为什么

在Vue.js 3.x中，`<template v-for>`的键可以放在`<template>`标签上。

### 建议

将`<template v-for>`的键放在`<template>`标签上，而不是子元素上。

### 错误示例

```vue
<template>
  <template v-for="foo in bar">
    <Foo :key="foo" />
  </template>
</template>
```

### 正确示例

```vue
<template>
  <template v-for="foo in bar" :key="foo">
    <Foo />
  </template>
</template>
```

### 参考

- [vue/no-v-for-template-key-on-child](https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html)
