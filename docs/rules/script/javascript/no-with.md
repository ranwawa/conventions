# no-with

禁用警告注释

### 为什么?

开发者经常给代码添加注释，标明哪些没有完成或需要审查。

### 错误示例

```js
function callback(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  // TODO
}
```

### 正确示例

```js
function callback(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  // NOT READY FOR PRIME TIME
  // but too bad, it is not a predefined warning term
}
```

### 参考

- [no-with](https://eslint.org/docs/rules/no-with)
