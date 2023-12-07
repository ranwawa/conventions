# vue/no-parsing-error

禁止在`<template>`中出现解析错误

### 为什么

这条规则用于报告`<template>`中的语法错误，例如指令中的脚本语法错误、插值中的脚本语法错误、HTML语法错误等。

### 建议

修复`<template>`中的语法错误。

### 错误示例

```vue
<template>
  {{ . }}
</template>
```

### 正确示例

```vue
<template>
  {{ foo }}
</template>
```

### 参考

- [vue/no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
