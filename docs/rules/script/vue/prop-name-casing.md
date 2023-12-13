# vue/prop-name-casing

Vue组件中的Prop名称必须使用驼峰命名法

### 为什么

烤串形式在后续引用时没办法直接用点操作符,要用中括号包住,写起来比较麻烦。

### 建议

将props属性名称改为驼峰命名法。

### 错误示例

```vue
<script>
export default {
  props: {
    'greeting-text': String,
    greeting_text: String
  }
};
</script>
```

### 正确示例

```vue
<script>
export default {
  props: {
    greetingText: String
  }
};
</script>
```

### 参考

- [vue/prop-name-casing](https://eslint.vuejs.org/rules/prop-name-casing.html)
