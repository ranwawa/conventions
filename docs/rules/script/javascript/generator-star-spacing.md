# generator-star-spacing

要求在构造函数中有 super() 的调用

### 为什么?

派生类中的构造函数必须调用 super()。非派生类的构造函数不能调用 super()JavaScript 引擎将引发一个运行时错误。

### 错误示例

```js
class A {
  constructor() {
    super(); // This is a SyntaxError.
  }
}

class A extends B {
  constructor() {} // Would throw a ReferenceError.
}
```

### 正确示例

```js
class A {
  constructor() {}
}

class A extends B {
  constructor() {
    super();
  }
}
```

### 参考

- [generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)
