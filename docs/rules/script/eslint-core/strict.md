# strict

必须使用严格模式

### 为什么

严格模式可以帮我们避免一些低级错误，例如在严格模式下，我们不能使用未声明的变量。

### 建议

在每个函数体或者全局作用域的开始处添加"use strict"。

当然,构建工具时代都会自动帮我们添加.ESM模式下也是自动添加的.

### 错误示例

```js
function foo() {
  //
}
```

### 正确示例

```js
function foo() {
  'use strict';
}
```

### 参考

- [strict](https://eslint.org/docs/rules/strict)
