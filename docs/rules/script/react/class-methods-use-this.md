# react/class-methods-use-this

强制类方法使用 this

### 为什么

如果一个类方法没有使用到this，那么它不应该成为一个类方法，应该被定义为一个静态方法或者一个独立的函数。

### 建议

将没有使用this的类方法改为静态方法或者独立的函数。

### 错误示例

```js
class Foo extends React.Component {
  bar() {
    return 'ranwawa';
  }
}
```

### 正确示例

```js
class Foo extends React.Component {
  static bar() {
    return 'ranwawa';
  }
}
```

### 参考

- [react/class-methods-use-this](https://eslint.org/docs/latest/rules/class-methods-use-this)
