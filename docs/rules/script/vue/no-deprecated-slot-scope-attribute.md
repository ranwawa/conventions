# vue/no-deprecated-slot-scope-attribute

禁止使用已废弃的`slot-scope`属性

### 为什么

在Vue.js 2.6.0+版本中，`slot-scope`属性已被废弃，继续使用可能会导致代码运行错误。

### 建议

使用`v-slot`代替`slot-scope`。

### 错误示例

```vue
<template>
  <ListComponent>
    <template slot-scope="props">
      {{ props.title }}
    </template>
  </ListComponent>
</template>
```

### 正确示例

```vue
<template>
  <ListComponent>
    <template v-slot="props">
      {{ props.title }}
    </template>
  </ListComponent>
</template>
```

### 参考

- [vue/no-deprecated-slot-scope-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html)
