# consistent-return

函数必须有统一的返回值

### 为什么?

在JavaScript中，函数的返回值类型可以不一致，这可能会导致混淆。如果函数的某些代码路径明确返回值，而其他代码路径没有明确返回值，可能是输入错误，尤其是在大型函数中。

### 建议

建议函数的所有返回路径都返回相同类型的值。

### 错误示例

```js
function doSomething(condition) {
  if (condition < 10) {
    return true;
  }
  if (condition > 10) {
    console.log();
  }
}

doSomething(10);
```

### 正确示例

```js
function doSomething(condition) {
  if (condition < 10) {
    return true;
  }

  if (condition > 10) {
    return false;
  }

  return null;
}

doSomething(10);
```

### 参考

- [consistent-return](https://eslint.org/docs/rules/consistent-return)
