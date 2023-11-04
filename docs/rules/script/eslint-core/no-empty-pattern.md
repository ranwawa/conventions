# no-empty-pattern

禁止使用空的解构模式

### 为什么

在使用解构时，可能会创建一个没有任何效果的模式。

### 建议

避免使用空的解构模式，如果需要使用默认值，应该使用等号。

### 错误示例

```js
var {} = foo;
```

### 正确示例

```js
var {a = {}} = foo;
```

### 参考

- [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)