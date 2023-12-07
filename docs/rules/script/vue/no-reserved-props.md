# vue/no-reserved-props

禁止在props中使用保留名称

### 为什么

这条规则禁止在props中使用保留名称，因为这些保留名称在Vue中有特殊的含义和用途，如果在props中使用，可能会导致意料之外的行为。

### 建议

不要在props中使用保留名称，如ref和key。

### 错误示例

```vue
<script>
export default {
  props: {
    ref: String
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  props: {
    myRef: String
  }
};
</script>
```

### 参考

- [vue/no-reserved-props](https://eslint.vuejs.org/rules/no-reserved-props.html)
