# vue/no-watch-after-await

禁止异步注册`watch`

### 为什么

在`setup()`函数中, `watch()`应该被同步注册。

### 建议

在`await`表达式之后不要使用`watch()`。

### 错误示例

```vue
<script>
import { watch } from 'vue';
export default {
  async setup() {
    await doSomething();

    watch('ranwawa', () => {
      /* ... */
    });
  }
};
</script>
```

### 正确示例

```vue
<script>
import { watch } from 'vue';
export default {
  async setup() {
    watch('ranwawa', () => {
      /* ... */
    });

    await doSomething();
  }
};
</script>
```

### 参考

- [vue/no-watch-after-await](https://eslint.vuejs.org/rules/no-watch-after-await.html)
