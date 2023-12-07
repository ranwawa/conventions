# vue/no-side-effects-in-computed-properties

禁止在计算属性中产生副作用

### 为什么

在计算属性和函数中引入副作用是非常LOW的做法，使得代码变得不可预测和难以理解。

### 建议

避免在计算属性和函数中修改数据。

### 错误示例

```vue
<script>
export default {
  computed: {
    fullName() {
      this.firstName = 'ranwawa'; // <- 副作用
      return `${this.firstName} ${this.lastName}`;
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
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
};
</script>
```

### 参考

- [vue/no-side-effects-in-computed-properties](https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html)
