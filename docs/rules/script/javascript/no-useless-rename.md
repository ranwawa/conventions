# no-useless-rename

禁用不必要的构造函数

### 为什么?

没有必要提供一个空的构造函数或只是简单的调用父类这样的构造函数。

### 错误示例

```js
class A {
  constructor() {}
}

class A extends B {
  constructor(...args) {
    super(...args);
  }
}
```

### 正确示例

```js
class A {}

class A {
  constructor() {
    doSomething();
  }
}

class A extends B {
  constructor() {
    super("foo");
  }
}

class A extends B {
  constructor() {
    super();
    doSomething();
  }
}
```

### 参考

- [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)
