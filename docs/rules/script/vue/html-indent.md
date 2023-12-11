 # vue/html-indent

模板中的缩进必须是2个空格

### 为什么

所有的标签，还有指令和插值中的所有表达式中的缩进都是2个空格,统一风格,提升代码的可维护性。

### 建议

在`<template>`中使用2个空格进行缩进。

### 错误示例

```vue
<template>
 <div class="foo">
   Hello.
    </div>
</template>
```

### 正确示例

```vue
<template>
  <div class="foo">
    Hello.
  </div>
</template>
```

### 参考

- [vue/html-indent](https://eslint.vuejs.org/rules/html-indent.html)