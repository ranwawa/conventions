# consistent-return

类函数必须使用 this,或者使用静态函数

### 为什么?

静态函数不用实例化可以直接调用,去掉了实例化步骤可以减少代码量和提升运行时性能

### 错误示例

```js
class Bad {
  sayHi() {
    console.log("hi");
  }
}
const bad = new Bad();
## bad.sayHi();
```

### 正确示例

```js
class Good {
  static sayHi() {
    console.log("hi");
  }
}
Good.sayHi();
```

### 参考

- [consistent-return](https://eslint.org/docs/rules/consistent-return)
