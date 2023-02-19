# no-implicit-globals

禁止使用较短的符号实现类型转换

### 为什么?

为了更好阅读和理解。

### 错误示例

```js
var n = +foo;
var n = 1 * foo;
```

### 正确示例

```js
var n = Number(foo);
var n = parseFloat(foo);
var n = parseInt(foo, 10);
```

### 参考

- [no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals)
