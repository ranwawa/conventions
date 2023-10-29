# no-this-before-super

禁止在super()之前使用this/super

### 为什么

在派生类的构造函数中，super()后可能会对实例产生副作用影响，如果在super执行完之前,就调用实例上的属性或者方法,其值可能会发生变化。

### 建议

在调用super()之后再使用this/super。

### 错误示例

```js
class Bar {
  name = 'ranwawa';

  constructor() {
    this.name = 'zhangsan';
  }

  foo = () => {
    console.log(this.a);
  };
}

class Foo extends Bar {
  constructor() {
    this.name = 'lisi';
    super.foo();
    super();
  }
}
```

### 正确示例

```js
class Bar {
  name = 'ranwawa';

  constructor() {
    this.name = 'zhangsan';
  }

  foo = () => {
    console.log(this.a);
  };
}

class Foo extends Bar {
  constructor() {
    super();
    this.name = 'lisi';
    super.foo();
  }
}
```

### 参考

- [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)
