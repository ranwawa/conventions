# vue/no-deprecated-events-api

禁止使用已废弃的事件API

### 为什么

在Vue.js 3.0.0+中，`$on`, `$off` `$once` API已被废弃。

### 建议

推荐使用mitt库来替代这些已废弃的API。

### 错误示例

```vue
<script>
export default {
  mounted() {
    this.$on('start', function (args) {
      console.log('start');
    });
    this.$emit('start');
  }
};
</script>
```

### 正确示例

```vue
<script>
import mitt from 'mitt';
const emitter = mitt();
export default {
  mounted() {
    emitter.on('start', function (args) {
      console.log('start');
    });
    emitter.emit('start');
  }
};
</script>
```

### 参考

- [vue/no-deprecated-events-api](https://eslint.vuejs.org/rules/no-deprecated-events-api.html)
