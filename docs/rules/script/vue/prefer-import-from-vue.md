# vue/prefer-import-from-vue

必须从'vue'导入,而不是从'@vue/\*'导入

### 为什么

统一一下风格,以下是常见的错误

- `@vue/runtime-dom`
- `@vue/runtime-core`
- `@vue/reactivity`
- `@vue/shared`

### 建议

将从'@vue/\*'的导入改为从'vue'导入

### 错误示例

```js
import { createApp } from '@vue/runtime-dom';
```

### 正确示例

```js
import { createApp } from 'vue';
```

### 参考

- [vue/prefer-import-from-vue](https://eslint.vuejs.org/rules/prefer-import-from-vue.html)
