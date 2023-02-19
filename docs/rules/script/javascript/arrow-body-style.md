# arrow-body-style

强制 typeof 表达式与有效字符串进行比较

### 为什么?

强制 typeof 表达式与有效的字符串文字进行比较。

### 错误示例

```js
typeof foo === "strnig";
typeof foo == "undefimed";
typeof bar != "nunber";
typeof bar !== "fucntion";
```

### 正确示例

```js
typeof foo === "string";
typeof bar == "undefined";
typeof foo === baz;
typeof bar === typeof qux;
```

### 参考

- [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)
