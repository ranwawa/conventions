# init-declarations

要求或禁止使用严格模式指令

### 为什么?

严格模式指令是在脚本或函数体开始位置放置一个 "use strict" 字面量。它启用了严格模式语义。

### 错误示例

```js
"use strict";
function foo() {}
function foo() {
  "use strict";
}
```

### 正确示例

```js
function foo() {}
```

### 参考

- [init-declarations](https://eslint.org/docs/rules/init-declarations)
