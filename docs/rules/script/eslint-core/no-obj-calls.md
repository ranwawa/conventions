# no-obj-calls

禁止将全局对象作为函数调用

### 为什么

js中有一个不成文的约定,大写开头的对象是构建函数.
但js内置了一些全局对象是以大写开着的（如`Math`和`JSON`），只是看起来像构造函数。

### 建议

不要将`Math`，`JSON`，`Reflect`，`Atomics`和`Intl`对象作为函数调用，也不要使用`new`操作符将这些对象作为构造函数。

### 错误示例

```js
JSON();
```

### 正确示例

```js
JSON.parse('{}');
```

### 参考

- [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)
