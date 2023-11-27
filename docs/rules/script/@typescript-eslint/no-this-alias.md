# no-this-alias

禁止别名`this`

### 为什么

将this赋值给另外一个变量,通常是因为对作用域原理不熟悉导致的~

### 建议

使用箭头函数来代替别名`this`

### 错误示例

```js
const foo = this;

setTimeout(function () {
  foo.doWork();
});
```

### 正确示例

```js
setTimeout(() => {
  this.doWork();
});
```

### 参考

- [no-this-alias](https://typescript-eslint.io/rules/no-this-alias)
