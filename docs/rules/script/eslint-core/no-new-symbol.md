# no-new-symbol

禁止使用new操作符调用Symbol

### 为什么

Symbol并不是设计用来与new操作符一起使用的，而是作为函数来调用的。实例化它就会报错。

### 建议

直接调用Symbol函数来创建symbol。

### 错误示例

```js
const foo = new Symbol('ranwawa');
```

### 正确示例

```js
const foo = Symbol('ranwawa');
```

### 参考

- [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)
