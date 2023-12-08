# vue/no-use-computed-property-like-method

禁止将计算属性用作方法

### 为什么

将计算属性用作方法会导致代码的可读性和可维护性降低。

### 建议

不要在方法中调用计算属性，而是直接使用计算属性的值。

### 错误示例

```vue
<script>
export default {
  computed: {
    computedReturnString() {
      return 'ranwawa';
    }
  },
  methods: {
    fn() {
      this.computedReturnString();
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
    computedReturnString() {
      return 'ranwawa';
    }
  },
  methods: {
    fn() {
      this.computedReturnString;
    }
  }
};
</script>
```

### 参考

- [vue/no-use-computed-property-like-method](https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html)
