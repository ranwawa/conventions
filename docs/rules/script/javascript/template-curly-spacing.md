# template-curly-spacing

要求 symbol 描述

### 为什么?

使用 描述 更容易促进调试。

### 错误示例

```js
var foo = Symbol();
```

### 正确示例

```js
var foo = Symbol("some description");
var someString = "some description";
var bar = Symbol(someString);
```

### 参考

- [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)
