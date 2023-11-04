# no-ex-assign

禁止在catch语句中重新赋值异常参数

### 为什么

catch的参数会存储错误的堆栈信息,如果被重新赋值了,这些堆栈信息就没了。并且arguments对象没有提供对这些数据的替代访问，所以对参数的赋值是绝对破坏性的。

### 建议

在catch子句中，不要重新赋值异常参数。

### 错误示例

```js
try {
  // code
} catch (e) {
  e = 10;
}
```

### 正确示例

```js
try {
  // code
} catch (e) {
  const foo = 10;
}
```

### 参考

- [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)
