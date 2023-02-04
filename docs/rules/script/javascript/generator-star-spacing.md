# 要求在构造函数中有 super() 的调用

## Why?

> 派生类中的构造函数必须调用 super()。非派生类的构造函数不能调用 super()JavaScript 引擎将引发一个运行时错误。

## bad

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

## good

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

## 参考:

- [generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)
