# no-constructor-return

禁止在构造函数中返回值

### 为什么

在JavaScript中，类的构造函数是不需要返回值的。

### 建议

删除构造函数中的return语句

### 错误示例

```js
class A {
  constructor(a) {
    this.a = a;
    return a;
  }
}
```

### 正确示例

```js
class A {
  constructor(a) {
    this.a = a;
  }
}
```

### 参考

- [no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)
