 # no-empty-function

禁止空函数

### 为什么

空函数会降低代码的可读性，因为读者需要猜测它是否是有意为之。

### 建议

在函数体中添加注释，说明函数的用途或者为什么函数体为空。

### 错误示例

```js
function foo() {}
```

### 正确示例

```js
function foo() {
    // 说明函数的用途或者为什么函数体为空
}
```

### 参考

- [no-empty-function](https://eslint.org/docs/rules/no-empty-function)