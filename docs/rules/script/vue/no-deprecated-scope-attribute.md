# vue/no-deprecated-slot-attribute

禁止使用已废弃的`slot`属性

### 为什么

在Vue.js 2.6.0+中，`slot`属性已被废弃，使用它可能会导致代码的兼容性问题。

### 建议

使用`v-slot`代替`slot`。

### 错误示例

```vue
<template>
  <ListComponent>
    <template slot="name">
      {{ props.title }}
    </template>
  </ListComponent>
</template>
```

### 正确示例

```vue
<template>
  <ListComponent>
    <template v-slot:name>
      {{ props.title }}
    </template>
  </ListComponent>
</template>
```

### 参考

- [vue/no-deprecated-slot-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html)
