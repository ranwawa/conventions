# vue/no-unused-components

禁止注册模板中未使用的组件

### 为什么

注册但未在模板中使用的组件会增加代码的复杂性和冗余。

### 建议

删除模板中未使用的组件。

### 错误示例

```vue
<template>
  <div>
    <h2>ranwawa</h2>
    <TheModal />
  </div>
</template>

<script>
import TheButton from './moduleA';
import TheModal from './moduleB';
import TheDropdown from './moduleD';

export default {
  components: {
    TheButton, // 未使用的组件
    TheDropdown
  }
};
</script>
```

### 正确示例

```vue
<template>
  <div>
    <h2>ranwawa</h2>
    <TheModal>
      <component :is="'TheDropdown'" />
      <TheButton>CTA</TheButton>
    </TheModal>
  </div>
</template>

<script>
import TheButton from './moduleA';
import TheModal from './moduleB';
import TheDropdown from './moduleD';

export default {
  components: {
    TheButton,
    TheModal,
    TheDropdown
  }
};
</script>
```

### 参考

- [vue/no-unused-components](https://eslint.vuejs.org/rules/no-unused-components.html)
