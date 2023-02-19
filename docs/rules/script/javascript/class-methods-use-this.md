# class-methods-use-this

限制圈复杂度

### 为什么?

通过在项目中设置一个圈复杂度阈值来控制代码的复杂度,它将会在圈复杂度超过配置的阈值时发出警告 (默认是 20)

### 错误示例

```js
// 最大阈值为 2 代码示例

function a(x) {
  if (true) {
    return x;
  } else if (false) {
    return x + 1;
  } else {
    return 4; // 3rd path
  }
}
```

### 正确示例

```js
function a(x) {
  if (true) {
    return x;
  } else {
    return 4;
  }
}
```

### 参考

- [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)
