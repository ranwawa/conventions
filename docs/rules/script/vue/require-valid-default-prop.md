# vue/require-valid-default-prop

默认属性值必须有效

### 为什么

检查每个属性的默认值是否对给定类型有效。当类型为`Array`或`Object`的默认值没有使用函数返回时，就会报错。

### 建议

对于类型为`Array`或`Object`的属性，其默认值应通过函数返回。

### 错误示例

```vue
<script>
export default {
  props: {
    propA: {
      type: String,
      default: {}
    }
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  props: {
    propE: {
      type: Object,
      default() {
        return { message: 'hello' };
      }
    }
  }
};
</script>
```

### 参考

- [vue/require-valid-default-prop](https://eslint.vuejs.org/rules/require-valid-default-prop.html)
