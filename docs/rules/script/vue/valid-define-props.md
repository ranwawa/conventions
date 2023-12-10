# vue/valid-define-props

强制执行有效的 `defineProps` 编译器宏

### 为什么

此规则检查 `defineProps` 编译器宏是否有效。

### 建议

避免以下情况:

- `defineProps` 引用本地声明的变量。
- `defineProps` 同时具有文字类型和参数。例如 `defineProps<{/*props*/}>({/*props*/})`
- `defineProps` 被多次调用。
- Props 在 `defineProps` 和 `export default {}` 中都定义了。
- Props 既未在 `defineProps` 中定义，也未在 `export default {}` 中定义。

### 错误示例

```vue
<script setup>
const def = { msg: String };
defineProps(def);
</script>
```

### 正确示例

```vue
<script setup>
defineProps({ msg: String });
</script>
```

### 参考

- [vue/valid-define-props](https://eslint.vuejs.org/rules/valid-define-props.html)
