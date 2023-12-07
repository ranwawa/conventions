# vue/no-mutating-props

禁止修改组件的props

### 为什么

修改组件的props会导致数据流混乱，不利于代码的维护和理解。

### 建议

不要直接修改props的值，而是通过事件通知父组件进行修改。

### 错误示例

```vue
<template>
  <div>
    <input v-model="value" @click="openModal" />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    openModal() {
      this.value = 'ranwawa';
    }
  }
};
</script>
```

### 正确示例

```vue
<template>
  <div>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      @click="openModal"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    openModal() {
      this.$emit('input', 'ranwawa');
    }
  }
};
</script>
```

### 参考

- [vue/no-mutating-props](https://eslint.vuejs.org/rules/no-mutating-props.html)
