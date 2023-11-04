# no-unsafe-optional-chaining

禁止在可能导致运行时错误的位置使用可选链

### 为什么

可选链表达式(`?.`)可能会短路并返回`undefined`。因此，将求值后的可选链表达式视为函数、对象、数字等，可能会导致TypeError或意外的结果。

### 建议

在可能导致运行时错误的位置，避免使用可选链。

### 错误示例

```js
const obj = undefined;

(obj?.foo)();
const a = [...obj?.foo];
```

### 正确示例

```js
const obj = undefined;

obj?.foo?.();
[...obj?.foo];
```

### 参考

- [no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)
