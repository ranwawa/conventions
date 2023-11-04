# constructor-super

构造函数必须调用super()

### 为什么

如果派生类的构造函数没有调用`super()`或者非派生类的构造函数调用了`super()`,JavaScript引擎会抛出运行时错误。

### 建议

派生类的构造函数必须调用`super()`,非派生类的构造函数不能调用`super()`

### 错误示例

```js
class A extends React {
  constructor() {
    // 会抛出一个ReferenceError.
  }
}
```

### 正确示例

```js
class A extends React {
  constructor() {
    super();

    console.log('ranwawa');
  }
}
```

### 参考

- [constructor-super](https://eslint.org/docs/rules/constructor-super)
