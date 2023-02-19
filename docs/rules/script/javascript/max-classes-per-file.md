# max-classes-per-file

for in 循环要用 if 语句过滤

### 为什么?

可能导致 for 循环中出现意想不到的情况。

### 错误示例

```js
for (key in foo) {
  doSomething(key);
}
```

### 正确示例

```js
for (key in foo) {
  if (Object.prototype.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
}
```

### 参考

- [max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)
