# vue/valid-next-tick

必须正确使用`nextTick`函数

### 为什么

如果没有传递回调函数并且没有等待返回的Promise，调用`Vue.nextTick`或`vm.$nextTick` 就没啥实际意义了。

### 建议

确保在调用`nextTick`函数时传递了正确的参数，并且正确地处理了返回的Promise。

### 错误示例

```vue
<script>
export default {
  async mounted() {
    Vue.nextTick();
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  async mounted() {
    await Vue.nextTick();
  }
};
</script>
```

### 参考

- [vue/valid-next-tick](https://eslint.vuejs.org/rules/valid-next-tick.html)
