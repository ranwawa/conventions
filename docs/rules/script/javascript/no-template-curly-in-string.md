# no-template-curly-in-string

禁止稀疏数组

### 为什么?

稀疏数组包含空槽，最常见的原因是数组字面量中使用了多个逗号。

### 错误示例

```js
var items = [,];
var colors = ["red", , "blue"];
```

### 正确示例

```js
var items = [];
var items = new Array(23);
```

### 参考

- [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)
