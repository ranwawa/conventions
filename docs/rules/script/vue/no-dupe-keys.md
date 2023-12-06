# vue/no-dupe-keys

禁止字段名重复

### 为什么

使用重复的键名会导致冲突，即使在`<script>`标签内部键名没有冲突，但在`<template>`中仍可能导致冲突，因为Vue允许从那里直接访问这些键。

### 建议

确保每个键名在组件中是唯一的。

### 错误示例

```vue
<script>
export default {
  props: {
    foo: String
  },
  computed: {
    foo: {
      get() {}
    }
  },
  data: {
    foo: null
  },
  methods: {
    foo() {}
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  props: {
    foo: String
  },
  computed: {
    bar: {
      get() {}
    }
  },
  data: {
    baz: null
  },
  methods: {
    qux() {}
  }
};
</script>
```

### 参考

- [vue/no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html)
