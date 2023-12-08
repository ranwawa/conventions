# vue/no-useless-template-attributes

禁止在`<template>`上使用无用的属性

### 为什么

`<template>`上只支持`v-if`和`v-for`和`key`。其它的用了也没效果.

### 建议

不要在`<template>`标签上使用无效的属性。

### 错误示例

```vue
<template>
  <template class="heading">...</template>
</template>
```

### 正确示例

```vue
<template>
  <template v-if="ranwawa">...</template>
  <template v-else>...</template>
</template>
```

### 参考

- [vue/no-useless-template-attributes](https://eslint.vuejs.org/rules/no-useless-template-attributes.html)
