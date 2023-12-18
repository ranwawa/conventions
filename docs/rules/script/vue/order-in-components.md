# vue/order-in-components

组件属性的顺序必须有序

### 为什么

组件中声明属性的顺序是有序的。有序的属性可以使代码更易读、易理解。

### 建议

按照推荐的顺序声明组件的属性。

### 错误示例

```vue
<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'ranwawa'
    };
  },
  props: {
    propA: Number
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  name: 'app',
  props: {
    propA: Number
  },
  data() {
    return {
      msg: 'ranwawa'
    };
  }
};
</script>
```

### 参考

- [vue/order-in-components](https://eslint.vuejs.org/rules/order-in-components.html)
