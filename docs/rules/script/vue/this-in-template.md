# vue/this-in-template

禁止在模板中使用`this`

### 为什么

模板中会自动绑定this,所以写了是多余的

### 建议

在模板中直接使用变量名，而不是`this.变量名`

### 错误示例

```vue
<template>
  <a :href="this.url">
    {{ this.text }}
  </a>
</template>
```

### 正确示例

```vue
<template>
  <a :href="url">
    {{ text }}
  </a>
</template>
```

### 参考

- [vue/this-in-template](https://eslint.vuejs.org/rules/this-in-template.html)
