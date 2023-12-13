# vue/no-template-shadow

禁止变量声明与外部作用域变量声明冲突

### 为什么

防止v-for指令或作用域属性的变量定义与父作用域中的变量产生冲突，避免混淆和错误。

模板中的变量也不能和script中的变量冲突

### 建议

确保v-for指令或作用域属性的变量名称与父作用域中的变量名称不同。

### 错误示例

```vue
<template>
  <div>
    <div v-for="bar in 5">
      <div v-for="bar in 10"></div>
      <div slot-scope="{ bar }"></div>
    </div>
  </div>
  <div v-for="baz in 5"></div>
</template>

<script>
export default {
  data() {
    return {
      baz: false
    };
  }
};
</script>
```

### 正确示例

```vue
<template>
 <div v-for="bar in 5">
      <div v-for="foo in 10"></div>
      <div slot-scope="{ baz }"></div>
    </div>
  </div>
</template>
```

### 参考

- [vue/no-template-shadow](https://eslint.vuejs.org/rules/no-template-shadow.html)
