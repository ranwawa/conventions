# radix

禁止使用 RegExp 构造函数

### 为什么?

禁止使用 RegExp 构造函数，而使用正则表达式字面量

### 错误示例

```js
new RegExp("abc");
```

### 正确示例

```js
/abc/;
new RegExp(pattern);
RegExp("abc", flags);
```

### 参考

- [radix](https://eslint.org/docs/rules/radix)
