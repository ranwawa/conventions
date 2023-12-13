# vue/require-default-prop

必须为非必需的props设置默认值

### 为什么

除了Boolean类型的props,不写默认是false,其他的props如果不提供默认值就会是undefined,后续操作可能会抛错.

### 建议

为每个非必需的props设置默认值，除了Boolean类型的props。

### 错误示例

```vue
<script>
export default {
  props: {
    a: Number
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  props: {
    a: {
      type: Number,
      required: true
    },
    b: {
      type: Number,
      default: 0
    }
  }
};
</script>
```

### 参考

- [vue/require-default-prop](https://eslint.vuejs.org/rules/require-default-prop.html)
