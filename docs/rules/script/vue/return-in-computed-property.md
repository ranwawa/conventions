# vue/return-in-computed-property

计算属性必须有返回值

### 为什么

计算属性的目的就是通过监听一个值,获取另一外一个值。如果不返回任何东西,那么这个监听就毫无意义了.

### 建议

在计算属性和函数中添加`return`语句。

### 错误示例

```vue
<script>
export default {
  computed: {
    baf: function () {}
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
      return !!this.bar;
    }
  }
};
</script>
```

### 参考

- [vue/return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html)
