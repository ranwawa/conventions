# no-console

禁止在条件语句中出现赋值操作符

### 为什么?

很难判断某个特定的赋值是否是有意为之。

### 错误示例

```js
var x;
if ((x = 0)) {
  var b = 1;
}
```

### 正确示例

```js
var x;
if (x === 0) {
  var b = 1;
}
```

### 参考

- [no-console](https://eslint.org/docs/rules/no-console)
