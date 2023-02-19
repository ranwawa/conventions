# no-useless-computed-key

禁止在构造函数中，在调用 super() 之前使用 this 或 super

### 为什么?

在派生类的构造函数中，如果在调用 super() 之前使用 this 或 super，它将会引发一个引用错误。

### 错误示例

```js
class A extends B {
  constructor() {
    this.a = 0;
    super();
  }
}

class A extends B {
  constructor() {
    this.foo();
    super();
  }
}
```

### 正确示例

```js
class A {
  constructor() {
    this.a = 0; // OK, this class doesn't have an `extends` clause.
  }
}

class A extends B {
  constructor() {
    super();
    this.a = 0; // OK, this is after `super()`.
  }
}
```

### 参考

- [no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)
