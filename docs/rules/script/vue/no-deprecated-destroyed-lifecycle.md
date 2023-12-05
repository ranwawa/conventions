# vue/no-deprecated-destroyed-lifecycle

禁止使用已废弃的`destroyed`和`beforeDestroy`生命周期钩子(Vue.js 3.0.0+)

### 为什么

在Vue.js 3.0.0+中，`destroyed`和`beforeDestroy`生命周期钩子已被废弃。

### 建议

使用`beforeUnmount`和`unmounted`替代。

### 错误示例

```vue
<script>
export default {
  beforeDestroy() {},
  destroyed() {}
};
</script>
```

### 正确示例

```vue
<script>
export default {
  beforeMount() {},
  mounted() {},
  beforeUnmount() {},
  unmounted() {}
};
</script>
```

### 参考

- [vue/no-deprecated-destroyed-lifecycle](https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html)
