# vue/no-deprecated-inline-template

禁止使用已废弃的`inline-template`属性

### 为什么

`inline-template`属性在Vue.js v3.0.0+中已被废弃。

### 建议

不要在组件中使用`inline-template`属性。

### 错误示例

```vue
<template>
  <my-component inline-template>
    <div>
      <p>'ranwawa'</p>
      <p>'zhangshan'</p>
    </div>
  </my-component>
</template>
```

### 正确示例

```vue
<template>
  <my-comnponent />
</template>
```

### 参考

- [vue/no-deprecated-inline-template](https://eslint.vuejs.org/rules/no-deprecated-inline-template.html)
