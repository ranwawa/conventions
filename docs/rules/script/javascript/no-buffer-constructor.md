# no-buffer-constructor

要求回调函数中有容错处理

### 为什么?

如果忘记处理这些错误会导致你的应用程序出现一些非常奇怪的行为。

### 错误示例

```js
function loadData(err, data) {
  doSomething();
}
```

### 正确示例

```js
function loadData(error, data) {
  if (error) {
    console.log(error.stack);
  }
  doSomething();
}
```

### 参考

- [no-buffer-constructor](https://eslint.org/docs/rules/no-buffer-constructor)
