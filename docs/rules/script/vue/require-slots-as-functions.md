# vue/require-slots-as-functions

必须将`$slots`的属性作为函数使用

### 为什么

在Vue.js 2.x中，`this.$slots.default`是VNode的数组，但在Vue.js 3.x中，是VNode数组的函数。

### 建议

当使用`$slots`的属性时，应作为函数来使用。

### 错误示例

```vue
<script>
export default {
  render(h) {
    var children = [...this.$slots.default];
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  render(h) {
    var children = this.$slots.default();
  }
};
</script>
```

### 参考

- [vue/require-slots-as-functions](https://eslint.vuejs.org/rules/require-slots-as-functions.html)
