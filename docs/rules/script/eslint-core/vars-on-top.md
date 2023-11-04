# vars-on-top

必须将变量声明放在作用域顶部

### 为什么

JavaScript解释器默认会将变量声明隐式地移动到其包含作用域的顶部，这就是所谓的作用域提升。

### 建议

显示的将所有变量声明放在函数或程序的顶部。

### 错误示例

```js
function doSomething() {
  if (true) {
    var foo = true;
  }
  var bar;
}
```

### 正确示例

```js
function doSomething() {
  var foo;
  var bar;
  if (true) {
    foo = true;
  }
}
```

### 参考

- [vars-on-top](https://eslint.org/docs/rules/vars-on-top)
