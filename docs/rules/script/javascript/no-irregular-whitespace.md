# no-irregular-whitespace

禁止在 RegExp 构造函数中使用无效的正则表达式字符串

### 为什么?

正则表达式字面量中的无效模式在代码解析时是 SyntaxError，但 RegExp 构造函数中的无效字符串仅在代码执行时抛出 SyntaxError。

### 错误示例

```js
RegExp("[");
RegExp(".", "z");
new RegExp("\\"); // ERROR: 'named' is readonly.
```

### 正确示例

```js
RegExp(".");
new RegExp();
this.RegExp("[");
```

### 参考

- [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)
