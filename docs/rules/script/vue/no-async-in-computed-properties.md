# vue/no-async-in-computed-properties

禁止在计算属性中使用异步操作

### 为什么

计算属性应该是同步的。在其中进行异步操作可能导致意外的行为，因此应避免使用。

### 建议

如需要，可以考虑使用插件`vue-async-computed`。

### 错误示例

```vue
<script>
export default {
  computed: {
    foo() {
      return Promise.all([new Promise((resolve, reject) => {})]);
    }
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  computed: {
    foo() {
      return 520;
    }
  }
};
</script>
```

### 参考

- [vue/no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html)
