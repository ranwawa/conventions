# 禁止在 this 的值未定义的上下文中使用 this

## Why?

> 在严格模式下，类或类类对象之外的这个关键字可能是未定义的，并引发 TypeError。

## bad

```js
"use strict";
(function () {
  this.a = 0;
  baz(() => this);
})();
```

## good

```js
("use strict");
this.a = 0;
baz(() => this);
```

## 参考:

- [no-iterator](https://eslint.org/docs/rules/no-iterator)
