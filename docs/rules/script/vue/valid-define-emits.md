# vue/valid-define-emits

强制有效的 `defineEmits` 编译宏

### 为什么

这条规则检查 `defineEmits` 编译宏是否有效。

### 建议

避免以下情况：

- `defineEmits` 引用了本地声明的变量
- `defineEmits` 同时具有文字类型和参数
- `defineEmits` 被调用多次
- 在 `defineEmits` 和 `export default {}` 中都定义了自定义事件
- 在 `defineEmits` 和 `export default {}` 中都没有定义自定义事件

### 错误示例

```vue
<script setup>
const def = { notify: null };
defineEmits(def);
</script>
```

### 正确示例

```vue
<script setup>
defineEmits({ notify: null });
</script>
```

### 参考

- [vue/valid-define-emits](https://eslint.vuejs.org/rules/valid-define-emits.html)
