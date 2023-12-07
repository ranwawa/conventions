# vue/no-lifecycle-after-await

禁止异步注册生命周期钩子

### 为什么

在`setup()`函数中，`onXXX`生命周期钩子应该同步注册。

### 建议

确保在`await`表达式之后不要注册生命周期钩子。

### 错误示例

```vue
<script>
import { onMounted } from 'vue';
export default {
  async setup() {
    await doSomething();

    onMounted(() => {
      //
    });
  }
};
</script>
```

### 正确示例

```vue
<script>
import { onMounted } from 'vue';
export default {
  async setup() {
    onMounted(() => {
      //
    });

    await doSomething();
  }
};
</script>
```

### 参考

- [vue/no-lifecycle-after-await](https://eslint.vuejs.org/rules/no-lifecycle-after-await.html)
