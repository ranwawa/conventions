# no-setter-return

禁止setter函数返回值

### 为什么

虽然从setter返回一个值不会产生错误，但返回的值被忽略了。这就是典型的画蛇添足。

### 建议

在setter函数中不要使用return语句返回值，如果需要控制流程，可以使用没有返回值的return语句。

### 错误示例

```js
const foo = {
  set a(value) {
    this.val = value;
    return value;
  }
};
```

### 正确示例

```js
const foo = {
  set a(value) {
    this.val = value;
  }
};
```

### 参考

- [no-setter-return](https://eslint.org/docs/rules/no-setter-return)
