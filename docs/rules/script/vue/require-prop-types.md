# vue/require-prop-types

必须在props中定义类型

### 为什么

prop的定义应尽可能详细，至少要指定类型,写的时候越仔细,用的时候问题就越少。

### 建议

在props中定义变量时，必须指定其类型。

### 错误示例

```vue
<script>
Vue.component('bar', {
  props: ['foo']
});

Vue.component('baz', {
  props: {
    foo: {}
  }
});
</script>
```

### 正确示例

```vue
<script>
Vue.component('foo', {
  props: {
    foo: String,
    bar: {
      type: String,
      required: true
    },
    baz: {
      required: true,
      validator: function (value) {
        return value === null || (Array.isArray(value) && value.length > 0);
      }
    }
  }
});
</script>
```

### 参考

- [vue/require-prop-types](https://eslint.vuejs.org/rules/require-prop-types.html)
