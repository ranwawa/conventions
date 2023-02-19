# no-param-reassign

禁止在字符串字面量中使用八进制转义序列

### 为什么?

ECMAScript 规范第 5 版起，字符串字面量中的八进制转义序列已经被弃用。不应该被使用。应该使用 Unicode 转义序列。

### 错误示例

```js
var foo = "Copyright \251";
```

### 正确示例

```js
var foo = "Copyright \u00A9"; // unicode
var foo = "Copyright \xA9"; // hexadecimal
```

### 参考

- [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)
