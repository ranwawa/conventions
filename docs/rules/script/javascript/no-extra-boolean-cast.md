# no-extra-boolean-cast

禁止在 catch 子句中重新分配异常

### 为什么?

由于没有参数对象提供对该数据的可选访问，对形参赋值绝对是破坏性的。

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
  var foo = 10;
}
```

### 参考

- [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)
