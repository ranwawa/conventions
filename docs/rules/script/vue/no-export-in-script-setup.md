# vue/no-export-in-script-setup

禁止在`<script setup>`中使用`export`

### 为什么

`<script setup>`的早期版本使用`export`来定义模板中使用的变量，但新的`<script setup>`已经更新，无需使用`export`来定义。这样可以使代码更简洁，易于理解。

### 建议

在`<script setup>`中定义变量时，直接赋值，不使用`export`。

### 错误示例

```vue
<script setup>
export const msg = 'ranwawa';
</script>
```

### 正确示例

```vue
<script setup>
const msg = 'ranwawa';
</script>
```

### 参考

- [vue/no-export-in-script-setup](https://eslint.vuejs.org/rules/no-export-in-script-setup.html)
