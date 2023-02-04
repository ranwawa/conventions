# vue3

## 组件名必须由多个单词构成

Why?

> html 标签全是一个单词,为了一目了然的区分 vue 组件和原生 html 标签,组件统一使用多个单词.

bad

```vue
<script>
export default {
  name: 'Order',
};
</script>
```

good

```vue
<script>
export default {
  name: 'CustomerOrder',
};
</script>
```

参考

- [vue/multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names.html)

## 禁止使用箭头函数定义监听函数

why?

> 箭头函数绑定父级上下文，所以 this 不会指向 vue 实例

bad

```vue
<script>
export default {
  watch: {
    foo: (val, oldVal) => {
      console.log('new: %s, old: %s', val, oldVal);
    },
  },
};
</script>
```

good

```vue
<script>
export default {
  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal);
    },
  },
};
</script>
```

参考

- ['vue/no-arrow-functions-in-watch'](https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html)
