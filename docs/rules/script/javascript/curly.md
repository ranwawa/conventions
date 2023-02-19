# curly

函数返回语句始终或从不指定值

### 为什么?

JavaScript 允许在一个函数中不同的代码路径返回不同类的值

### 错误示例

```js
function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    return;
  }
}
```

### 正确示例

```js
function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    return false;
  }
}
```

### 参考

- [curly](https://eslint.org/docs/rules/curly)
