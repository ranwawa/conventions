# no-undefined

禁止将变量初始化为 undefined

### 为什么?

在 JavaScript 中，声明一个变量但未初始化，变量会自动获得 undefined 作为初始值。

### 错误示例

```js
var foo = undefined;
let bar = undefined;
```

### 正确示例

```js
var foo;
let bar;
const baz = undefined;
```

### 参考

- [no-undefined](https://eslint.org/docs/rules/no-undefined)
