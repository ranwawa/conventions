# class-methods-use-this

推荐类方法使用this

### 为什么?

如果一个类方法不使用`this`，可以将其转换为静态函数。这样做可以提高代码的可读性和可维护性。

### 建议

如果类方法没有使用`this`，建议将其转换为静态方法。

### 错误示例

```js
class A {
  foo() {
    console.log('ranwawa'); // 这里的foo方法没有使用this
  }
}
```

### 正确示例

```js
class A {
  name = 'ranwawa';

  foo() {
    console.log(this.name); // 这里的foo方法使用了this
  }
}
```

```js
class A {
  // 转换成了静态方法
  static foo() {
    console.log('ranwawa');
  }
}
```

### 参考

- [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)
