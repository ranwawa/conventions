# vue/no-ref-as-operand

禁止将`ref()`包装的值用作操作数

### 为什么

这条规则是为了防止错误地将ref作为操作数使用。你必须使用`.value`来访问`Ref`值。

### 建议

使用`.value`来访问`Ref`值

### 错误示例

```vue
<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    count++;

    return {
      count
    };
  }
};
</script>
```

### 正确示例

```vue
<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    count.value++;

    return {
      count
    };
  }
};
</script>
```

### 参考

- [vue/no-ref-as-operand](https://eslint.vuejs.org/rules/no-ref-as-operand.html)
