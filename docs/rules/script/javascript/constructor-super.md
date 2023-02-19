# constructor-super

强制箭头函数的箭头前后使用一致的空格

### 为什么?

规范化箭头函数的箭头之前或之后的空格风格。

### 错误示例

```js
() => {};
() => {};
(a) => {};
(a) => {};
(a) => a;
(a) => a;
() => {
  "\n";
};
() => {
  "\n";
};
```

### 正确示例

```js
() => {};
(a) => {};
(a) => a;
() => {
  "\n";
};
```

### 参考

- [constructor-super](https://eslint.org/docs/rules/constructor-super)
