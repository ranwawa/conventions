# no-iterator

禁止在 this 的值未定义的上下文中使用 this

### 为什么?

在严格模式下，类或类类对象之外的这个关键字可能是未定义的，并引发 TypeError。

### 错误示例

```js
"use strict";
(function () {
  this.a = 0;
  baz(() => this);
})();
```

### 正确示例

```js
("use strict");
this.a = 0;
baz(() => this);
```

### 参考

- [no-iterator](https://eslint.org/docs/rules/no-iterator)
