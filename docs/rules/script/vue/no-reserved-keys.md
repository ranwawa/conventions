# vue/no-reserved-keys

禁止覆盖保留关键字

### 为什么

为了避免冲突和意外行为，不应使用[保留名称](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/utils/vue-reserved.json)。

### 建议

不要使用Vue保留的关键字作为props, computed, data, methods等的名称。如果想不出其它名字,就在该词前面加个限定词,比如my,custom等等

### 错误示例

```vue
<script>
export default {
  props: {
    $el: String
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  props: {
    myEl: String
  }
};
</script>
```

### 参考

- [vue/no-reserved-keys](https://eslint.vuejs.org/rules/no-reserved-keys.html)
