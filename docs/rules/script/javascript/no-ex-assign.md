# no-ex-assign

禁止在正则表达式中使用空字符类

### 为什么?

因为正则表达式中的空字符类不匹配任何东西，所以它们可能会出现输入错误。

### 错误示例

```js
/^abc[]/.test("abcdefg"); // false
"abcdefg".match(/^abc[]/); // null
```

### 正确示例

```js
/^abc/.test("abcdefg"); // true
"abcdefg".match(/^abc/); // ["abc"]
```

### 参考

- [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)
