# no-restricted-properties

禁止重新声明变量

### 为什么?

在 JavaScript 中，使用 var 可以对同一个变量再次声明。这会使变量实际声明和定义的位置混乱不堪。

### 错误示例

```js
var a = 3;
var a = 10;
```

### 正确示例

```js
var a = 3;
// ...
a = 10;
```

### 参考

- [no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)
