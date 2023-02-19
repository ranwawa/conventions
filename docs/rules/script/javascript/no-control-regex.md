# no-control-regex

禁止在条件中使用常量表达式

### 为什么?

将一个常量表达式（比如，一个字面值）作为一个测试条件可能是个书写错误或者为了触发某个特定的行为。

### 错误示例

```js
var result = 0 ? a : b;
```

### 正确示例

```js
var result = x !== 0 ? a : b;
```

### 参考

- [no-control-regex](https://eslint.org/docs/rules/no-control-regex)
