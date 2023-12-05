# vue/no-computed-properties-in-data

禁止在`data`中访问计算属性

### 为什么

在`data()`中无法访问计算属性，因为它在初始化之前就会执行。

### 建议

不要在`data()`中访问计算属性。

### 错误示例

```vue
<script>
export default {
  data() {
    return {
      bar: this.foo
    };
  },
  computed: {
    foo() {
      //
    }
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  data() {
    return {
      bar: 'zhangshan'
    };
  },
  computed: {
    foo() {
      //
    }
  }
};
</script>
```

### 参考

- [vue/no-computed-properties-in-data](https://eslint.vuejs.org/rules/no-computed-properties-in-data.html)
