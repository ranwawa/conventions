# require-yield

使用模板字面量而非字符串连接

### 为什么?

在 ES2015 (ES6) 中，我们可以使用模板而非字符串连接。

### 错误示例

```js
var str = "Hello, " + name + "!";
var str = "Time: " + 12 * 60 * 60 * 1000;
```

### 正确示例

```js
var str = "Hello World!";
var str = `Hello, ${name}!`;
var str = `Time: ${12 * 60 * 60 * 1000}`;

// This is reported by `no-useless-concat`.
var str = "Hello, " + "World!";
```

### 参考

- [require-yield](https://eslint.org/docs/rules/require-yield)
